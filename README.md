Live website deployed 
- Amplify: https://main.d1b24qwx1v708v.amplifyapp.com/
- Vercel (will be deprecated): https://mattheworga.vercel.app/

# Web Portfolio with Chatbot — Architecture

| Layer | Tech / Service |
| --- | --- |
| **Frontend** | React + Vite |
| **Hosting** | AWS Amplify |
| **Infrastructure** | AWS CDK (Python) |
| **AI Backend** | Lambda Function URL (streaming) |
| **LLM** | Amazon Bedrock |
| **Resume Context** | System prompt or S3 |
| **Rate Limiting** | IP-based via DynamoDB |
| **Soft Limit** | Session-based (cookie) |
| **Budget Safety** | CloudWatch alarm |
