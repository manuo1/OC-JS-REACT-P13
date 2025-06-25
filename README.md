# Argent Bank Project

This repository contains two main parts of the Argent Bank application:

- [Backend](argent-bank/backend/README.md) — The Express + MongoDB API server
- [Frontend](argent-bank/frontend/README.md) — The React application built with Vite

Each part has its own README with detailed instructions for setup, development, and deployment.

---

## Quick start

- To start the backend, follow the instructions in [backend README](argent-bank/backend/README.md).
- To start the frontend, follow the instructions in [frontend README](argent-bank/frontend/README.md).



### Dev Scripts

Before using them for the first time, make the scripts executable by running this command in your terminal:

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

To start the full development environment, run:

```bash
./dev.sh
```