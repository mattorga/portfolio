# Web Portfolio Chatbot — Architecture

| Layer | Choice |
| --- | --- |
| **Frontend** | React + Vite |
| **Hosting** | AWS Amplify |
| **Infrastructure** | AWS CDK (Python) |

# Todos
| Layer | Choice |
| --- | --- |
| **AI Backend** | Lambda Function URL (streaming) |
| **LLM** | Amazon Bedrock |
| **Resume Context** | System prompt or S3 |
| **Rate Limiting** | IP-based via DynamoDB |
| **Soft Limit** | Session-based (cookie) |
| **Budget Safety** | CloudWatch alarm |
