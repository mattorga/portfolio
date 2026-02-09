# Web Portfolio Chatbot — Architecture Decisions

| Layer | Choice | Why |
| --- | --- | --- |
| **Frontend** | React + Vite | Lightweight, no SSR needed, fast builds |
| **Hosting** | AWS Amplify (Currently in Vercel) | Built-in CI/CD, easy static site deployment |
| **AI Backend** | Lambda Function URL (streaming) | Native response streaming, stays in AWS ecosystem |
| **LLM** | Amazon Bedrock | Foundation model access (Claude, etc.), not intent-based like Lex |

# Todos
| Layer | Choice | Why |
| **Resume Context** | System prompt or S3 | Stuff resume into prompt; S3 if you want it dynamic |
| **Rate Limiting** | IP-based via DynamoDB | Primary throttle per IP per day |
| **Soft Limit** | Session-based (cookie) | UX-friendly message count for honest users |
| **Budget Safety** | Global DynamoDB counter + CloudWatch alarm | Kill switch near $100 cap, billing alert as early warning |
