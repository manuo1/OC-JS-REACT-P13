# Argent Bank Project

This repository contains two main parts of the Argent Bank application:

- [Backend](argent-bank/backend/) — The Express + MongoDB API server
- [Frontend](argent-bank/frontend/) — The React application built with Vite

Each part has its own README with detailed instructions for setup, development, and deployment.

---

## Quick start

### Clone the repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/manuo1/OC-JS-REACT-P13.git
cd argent-bank
```
### Install and start :

- To start the backend, follow the instructions in [backend README](argent-bank/backend/README.md).
- To start the frontend, follow the instructions in [frontend README](argent-bank/frontend/README.md).



## Local Development Scripts

⚠️ Run all scripts from the root of the project directory.

⚠️ Before using them for the first time, make the scripts executable by running this command in your terminal:

```bash
chmod +x db-start.sh db-stop.sh dev.sh
```

To start MongoDB, run:

```bash
./db-start.sh
```

To stop MongoDB, run:

```bash
./db-stop.sh
```

To start the full development environment (database, backend, frontend), run:

```bash
./dev.sh
```

## API Documentation (Swagger)

This project includes two Swagger documentation files for the backend APIs:

- **Main API (Phase 1)**: The current official Swagger documentation for the production API  
  Accessible locally at: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)  
  This file describes all currently implemented routes.

- **Transactions API Proposal (Phase 2)**: Swagger documentation for the proposed transactions API  
  Accessible locally at: [http://localhost:3001/api-docs-proposal](http://localhost:3001/api-docs-proposal)  
  This file is a design draft, not yet implemented, presenting the proposed endpoints for banking transactions.

Both use Swagger UI for easy browsing and interactive testing.

---

> **Note:** The above URLs are valid in the local development environment with the backend server running on port 3001.
