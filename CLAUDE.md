# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Running the Application
- `npm start` - Start the server (production)
- `npm run dev` - Start the server (development)
- `npm install` - Install dependencies (none currently, but used in CI/CD)

### CI/CD Pipeline
- **Jenkins**: `Jenkinsfile` defines pipeline with install and start stages
- **AWS CodeBuild**: `buildspec.yml` configured for Docker image builds and push to Docker Hub
- Jenkins pipeline runs `npm install` followed by `npm start`
- CodeBuild expects Docker environment variables: `DOCKER_USERNAME`, `DOCKER_PASSWORD`, `IMAGE_REPO_NAME`, `IMAGE_TAG`

## Architecture

This is a simple Node.js web API project built with native HTTP module (zero dependencies). The project is part of an AWS learning plan for building resilient web APIs with disaster recovery.

### Core Files
- `app.js` - Main application server using Node.js native HTTP module
- `package.json` - Node.js project configuration with minimal dependencies
- `AWS-Learning-Plan.md` - Comprehensive 10-week learning plan for AWS services

### API Structure
The application currently provides:
- `GET /` - Returns JSON response with "hello world" message
- All other routes return 404 with JSON error response

### Project Context
This is the foundation for a multi-phase AWS learning project that will evolve to include:
- PostgreSQL database integration
- Jenkins CI/CD pipeline
- Multi-region disaster recovery (us-east-1 primary, us-west-2 secondary)
- Auto Scaling Groups and Load Balancers
- Route 53 DNS failover

The current implementation is intentionally minimal, using only native Node.js modules to establish the baseline before adding AWS services and dependencies.