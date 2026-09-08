from datetime import datetime, timezone

from fastapi import FastAPI
from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str
    service: str
    timestamp: str


app = FastAPI(
    title="ARMIN Security AI",
    description="AI service for ARMIN Security AI platform",
    version="0.1.0",
)


@app.get("/health", response_model=HealthResponse)
async def health() -> HealthResponse:
    return HealthResponse(
        status="ok",
        service="ai",
        timestamp=datetime.now(timezone.utc).isoformat(),
    )


@app.get("/")
async def root():
    return {
        "name": "ARMIN Security AI",
        "service": "ai",
        "version": "0.1.0",
    }