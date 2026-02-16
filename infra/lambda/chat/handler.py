import json
import boto3

bedrock_runtime = boto3.client(
    service_name='bedrock-runtime',
    region_name='ap-southeast-1'
)

models = {
    "claude-haiku-4-5": "global.anthropic.claude-haiku-4-5-20251001-v1:0",
}

def main(event, response_stream):
    prompt = json.loads(event.get("body")).get("prompt")

    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 200,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    })

    response = bedrock_runtime.invoke_model_with_response_stream(
        body=body,
        modelId=models["claude-haiku-4-5"],
        accept='application/json',
        contentType='application/json'
    )

    for event in response.get('body'):
        chunk = json.loads(event['chunk']['bytes'])
        if chunk['type'] == 'content_block_delta':
            text = chunk['delta'].get('text', '')
            response_stream.write(text.encode('utf-8'))

    response_stream.close()