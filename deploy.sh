#!/bin/bash
# Kutup Grup - Production Deploy Script
# Usage: ./deploy.sh [--build] [--restart]

set -e

echo "🚀 Kutup Grup - Deployment Script"
echo "================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check for required files
if [ ! -f "docker-compose.yml" ]; then
    echo -e "${RED}❌ docker-compose.yml not found!${NC}"
    exit 1
fi

if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  .env file not found. Copying from .env.example...${NC}"
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Please edit .env with your production values before proceeding.${NC}"
    exit 1
fi

# Pull latest changes
echo -e "${GREEN}📥 Pulling latest changes...${NC}"
git pull origin main 2>/dev/null || echo "Not a git repo or no remote, skipping pull"

# Build and deploy
if [ "$1" = "--build" ] || [ "$1" = "-b" ]; then
    echo -e "${GREEN}🔨 Building Docker image...${NC}"
    docker compose build --no-cache
fi

echo -e "${GREEN}🚀 Starting containers...${NC}"
docker compose up -d

# Health check
echo -e "${GREEN}🏥 Checking health...${NC}"
sleep 5
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    echo -e "${GREEN}✅ Site is live at http://localhost:3000${NC}"
else
    echo -e "${RED}❌ Health check failed. Check logs:${NC}"
    docker compose logs --tail=20
fi

echo -e "${GREEN}=================================${NC}"
echo -e "${GREEN}📊 Container status:${NC}"
docker compose ps
