# Infrastructure

AWS CDK infrastructure for the portfolio application, deployed to AWS using Python.

## Overview

| Property | Value |
|----------|-------|
| **Language** | Python |
| **Framework** | AWS CDK v2 |
| **Region** | ap-southeast-1 (Singapore) |
| **Account** | 288612232466 |

## Project Structure

```
infra/
├── app.py                    # CDK application entry point
├── cdk.json                  # CDK configuration and feature flags
├── requirements.txt          # Python dependencies
├── requirements-dev.txt      # Development dependencies
├── infra/
│   ├── __init__.py
│   └── infra_stack.py        # Main infrastructure stack
├── lambda/
│   └── chat/
│       ├── main.py           # FastAPI app with streaming endpoint
│       ├── Dockerfile         # Docker image with Lambda Web Adapter
│       └── requirements.txt   # Python dependencies for the Lambda
└── tests/
    └── unit/
        └── test_infra_stack.py   # Unit tests
```

## Prerequisites

- Python 3.12+
- Docker (for building Lambda container images)
- AWS CLI configured with credentials
- AWS CDK CLI (`npm install -g aws-cdk`)
- CDK bootstrapped in target account/region

## Setup

1. Create and activate virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   # or
   .venv\Scripts\activate.bat  # Windows
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   pip install -r requirements-dev.txt
   ```

## CDK Commands

| Command | Description |
|---------|-------------|
| `cdk synth` | Synthesize CloudFormation template |
| `cdk diff` | Compare deployed stack with local |
| `cdk deploy` | Deploy stack to AWS |
| `cdk destroy` | Remove stack from AWS |
| `cdk ls` | List all stacks |

## Stack: InfraStack

The main stack (`InfraStack`) is defined in `infra/infra_stack.py`.

### Current Resources

- **Lambda (Docker)**: Chat function using FastAPI + [Lambda Web Adapter](https://github.com/awslabs/aws-lambda-web-adapter) for response streaming
- **Bedrock**: Invokes Claude Haiku 4.5 via `invoke_model_with_response_stream`
- **Function URL**: Direct HTTPS endpoint with `RESPONSE_STREAM` invoke mode

#### Chat Endpoint

`POST /api/chat` with request body:
```json
{"prompt": "your prompt here"}
```
Returns a streaming `text/plain` response.

### Planned Resources

Based on the portfolio techstack (React + AWS Serverless + Amplify):

- **S3**: Static asset storage
- **CloudFront**: CDN distribution
- **API Gateway**: REST/HTTP APIs
- **DynamoDB**: NoSQL database (if needed)

## Security Configuration

The CDK configuration includes 72+ security-focused feature flags enabled by default:

- S3 public access blocked
- IMDSv2 enforced on EC2
- KMS key alias permissions
- IAM policy minimization
- Default security group restrictions
- OIDC unauthorized connection rejection

## Testing

Run unit tests with pytest:
```bash
pytest tests/
```

Tests use AWS CDK assertions to validate CloudFormation resource generation.

## Dependencies

### Production
- `aws-cdk-lib>=2.238.0,<3.0.0`
- `constructs>=10.0.0,<11.0.0`

### Development
- `pytest==8.4.2`

## Deployment

### First-time setup

Bootstrap CDK in your AWS account (one-time):
```bash
cdk bootstrap aws://288612232466/ap-southeast-1
```

### Deploy

```bash
cdk deploy
```

### Destroy

```bash
cdk destroy
```

## Outputs

After synthesis, CloudFormation templates are generated in `cdk.out/`.

---

*This is a living document. Update it as infrastructure changes are made.*
