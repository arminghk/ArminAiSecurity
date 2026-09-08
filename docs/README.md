# ARMIN Security AI

ARMIN Security AI is an AI-powered security assessment platform.

## Architecture

- Next.js
- NestJS
- Python / FastAPI
- PostgreSQL
- Redis
- MinIO
- BullMQ

## Applications

- `apps/api` - Main backend API
- `apps/ai` - AI service
- `apps/worker` - Background workers
- `apps/web` - Web application

## Packages

- `packages/types`
- `packages/contracts`
- `packages/config`
- `packages/logger`

## Development

Start infrastructure:

```bash
docker compose \
  --env-file .env.example \
  -f infrastructure/docker/docker-compose.yml \
  up -d