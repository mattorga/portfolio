import boto3
import json
import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://mattheworga.com", "http://localhost:5173"],
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

MODELS = {
    "claude-haiku-4-5": "global.anthropic.claude-haiku-4-5-20251001-v1:0",
}

bedrock_runtime = boto3.client(
    service_name="bedrock-runtime",
    region_name="ap-southeast-1",
)


class PromptRequest(BaseModel):
    prompt: str


@app.post("/api/chat")
def api_chat(body: PromptRequest):
    return StreamingResponse(bedrock_stream(body.prompt), media_type="text/plain")


async def bedrock_stream(prompt: str):
    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 200,
        "messages": [
            {"role": "user", "content": prompt}
        ],
    })

    response = bedrock_runtime.invoke_model_with_response_stream(
        body=body,
        modelId=MODELS["claude-haiku-4-5"],
        accept="application/json",
        contentType="application/json",
    )

    stream = response.get("body")
    if stream:
        for event in stream:
            chunk = event.get("chunk")
            if chunk:
                message = json.loads(chunk.get("bytes").decode())
                if message["type"] == "content_block_delta":
                    yield message["delta"].get("text", "")
                elif message["type"] == "message_stop":
                    yield "\n"


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", "8080")))
