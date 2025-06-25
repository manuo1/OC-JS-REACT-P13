# Argent Bank Backend

This folder contains the backend API server for Argent Bank, built with Express and MongoDB.

## Prerequisites

- Node.js v12+
- MongoDB Community Server

Make sure Node and MongoDB are installed and accessible in your terminal:

```bash
node --version
mongo --version
```

## Setup and Start

1. Open a terminal at this folder (`argent-bank/backend/`)
2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm run dev:server
```

4. Populate the database with example users:

```bash
npm run populate-db
```

By default, the backend runs on: `http://localhost:3001`

## Populated Database Data

The populate-db script adds two users:

- Tony Stark (tony@stark.com / password123)
- Steve Rogers (steve@rogers.com / password456)

## API Documentation

Two Swagger docs are available when the backend is running:

- Main API (Phase 1): [http://localhost:3001/api-docs](http://localhost:3001/api-docs)
- Transactions API Proposal (Phase 2): [http://localhost:3001/api-docs-proposal](http://localhost:3001/api-docs-proposal)

See the main project README for more info on these docs.