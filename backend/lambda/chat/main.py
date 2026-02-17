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
    allow_origins=["https://mattheworga.vercel.app", "http://localhost:5173", "https://main.d1b24qwx1v708v.amplifyapp.com"],
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

bedrock = boto3.client(
    service_name="bedrock",
    region_name="ap-southeast-1",
)

with open("personal.md") as f:
    PERSONAL_INFO = f.read()

with open("knowledge.md") as f:
    KNOWLEDGE_BASE = PERSONAL_INFO + "\n" + f.read()

SYSTEM_PROMPT = (
    f"""You are Matt's portfolio assistant.

    {KNOWLEDGE_BASE}

    Keep responses concise, conversational, professional.

    ## Music Playback
    When a user asks you to play a song by Sinai (Matt's band), respond conversationally and include the audio player marker on its own line.

    Available songs:
    - panaginip (Panaginip, 2020)
    - mhp (MHP / My Heart Prays, 2022)
    - anghel (Anghel, 2026)

    Format: [AUDIO_PLAYER:<song_id>]

    Example response when asked "play Panaginip":
    Here's **Panaginip** by Sinai — their first release from 2020!

    [AUDIO_PLAYER:panaginip]

    Rules:
    - Only use the exact song IDs listed above. Never invent song IDs.
    - Include at most one audio player per response.
    - If the user asks for a song not by Sinai, let them know only Sinai songs are available.
    - If the user asks to "play a song" or "play me something" without specifying, pick one of the three songs.
    """
)


class MessageItem(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[MessageItem]


@app.post("/api/chat")
def api_chat(body: ChatRequest):
    messages = [{"role": m.role, "content": m.content} for m in body.messages]
    return StreamingResponse(bedrock_stream(messages), media_type="text/plain")

@app.get("/list-models")
def list_models():
    response = bedrock.list_foundation_models(byProvider="Anthropic")
    models = [
        {
            "modelId": m["modelId"],
            "modelName": m["modelName"],
            "inputModalities": m["inputModalities"],
            "outputModalities": m["outputModalities"],
            "responseStreamingSupported": m["responseStreamingSupported"],
        }
        for m in response["modelSummaries"]
    ]
    return {"models": models}



async def bedrock_stream(messages: list[dict]):
    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1024,
        "system": SYSTEM_PROMPT,
        "messages": messages,
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
