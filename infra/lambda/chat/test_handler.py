import json
import sys
import boto3

bedrock_runtime = boto3.client(
    service_name='bedrock-runtime',
    region_name='ap-southeast-1'
)

def main(prompt):
    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 200,
        "messages": [
            {"role": "user", "content": prompt}
        ]
    })

    response = bedrock_runtime.invoke_model(
        body=body,
        modelId="global.anthropic.claude-haiku-4-5-20251001-v1:0",
        accept='application/json',
        contentType='application/json'
    )

    response_body = json.loads(response.get('body').read())
    answer = response_body.get('content')[0].get('text')

    return {'statusCode': 200, 'body': json.dumps({"Answer": answer})}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python test_handler.py \"Your question here\"")
        sys.exit(1)

    result = main(sys.argv[1])
    print(json.dumps(json.loads(result['body']), indent=2))
