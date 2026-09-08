# ARMIN Security AI Architecture

## Applications

- API: NestJS
- AI: FastAPI / Python
- Worker: NestJS
- Web: Next.js

## Infrastructure

- PostgreSQL
- Redis
- MinIO

## Communication

### Synchronous

Web -> API
API -> AI

### Asynchronous

API -> Redis/BullMQ -> Worker

## Core Principles

1. LLM is not trusted.
2. No tool execution without policy.
3. No assessment without scope.
4. No finding without evidence.
5. No confirmation without validation.
6. Long-running operations are asynchronous.
7. All important security actions are auditable.