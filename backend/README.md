# Backend

AWS SAM backend for the portfolio application, deployed to AWS using Python.

## Overview

| Property | Value |
|----------|-------|
| **Language** | Python |
| **Framework** | AWS SAM |
| **Region** | ap-southeast-1 (Singapore) |
| **Account** | 288612232466 |
| **Stack Name** | sam-bedrock |

## Project Structure

```
backend/
├── template.yaml              # SAM template (infrastructure definition)
├── samconfig.toml             # SAM CLI deployment configuration
├── README.md
├── CLAUDE.md
└── lambda/
    └── chat/
        ├── main.py            # FastAPI app with streaming endpoint
        ├── Dockerfile         # Docker image with Lambda Web Adapter
        ├── requirements.txt   # Python dependencies for the Lambda
        ├── knowledge.md       # Portfolio knowledge base
        └── personal.md        # Personal info for system prompt
```

## Prerequisites

- Python 3.12+
- Docker (for building Lambda container images)
- AWS CLI configured with credentials
- AWS SAM CLI (`pip install aws-sam-cli`)

## SAM Commands

| Command | Description |
|---------|-------------|
| `sam build` | Build the Lambda container image |
| `sam deploy` | Deploy stack to AWS |
| `sam deploy --guided` | Interactive first-time deployment |
| `sam local start-api` | Run API locally for testing |
| `sam delete` | Remove stack from AWS |
| `sam validate` | Validate the SAM template |

## Stack Resources

Defined in `template.yaml`.

### Current Resources

- **Lambda (Docker, arm64)**: Chat function using FastAPI + [Lambda Web Adapter](https://github.com/awslabs/aws-lambda-web-adapter) for response streaming
- **Bedrock**: Invokes Claude Haiku 4.5 via `invoke_model_with_response_stream`
- **Function URL**: Direct HTTPS endpoint with `RESPONSE_STREAM` invoke mode

### Chat Endpoint

`POST /api/chat` with request body:
```json
{
  "messages": [
    {"role": "user", "content": "Hello"},
    {"role": "assistant", "content": "Hi! How can I help?"},
    {"role": "user", "content": "Tell me about Matt's projects"}
  ]
}
```
The full conversation history is sent with each request so the model can maintain context across turns. A system prompt provides the model with portfolio context from `knowledge.md` and `personal.md`. Returns a streaming `text/plain` response (max 1024 tokens).

The assistant also supports music playback for Sinai songs via `[AUDIO_PLAYER:<song_id>]` markers in responses.

## Deployment

### First-time setup

Run guided deployment to configure `samconfig.toml`:
```bash
sam build && sam deploy --guided
```

### Deploy

```bash
sam build && sam deploy
```

### Delete

```bash
sam delete
```

## Outputs

After deployment, the stack outputs:
- **ChatFunctionUrl** - Function URL for the chat endpoint
- **ChatFunction** - Chat Lambda Function ARN

---

*This is a living document. Update it as infrastructure changes are made.*
