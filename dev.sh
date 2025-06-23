#!/bin/bash
sudo systemctl stop mongod
echo "Starting MongoDB..."
sudo systemctl start mongod

# Wait for MongoDB to be active
echo "Waiting for MongoDB to start..."
for i in {1..10}; do
  if systemctl is-active --quiet mongod; then
    echo "MongoDB is running."
    break
  fi
  echo "Waiting... ($i)"
  sleep 1
done

if ! systemctl is-active --quiet mongod; then
  echo "MongoDB failed to start."
  exit 1
fi

echo "Starting backend..."
cd argent-bank/backend || exit
npm run dev:server &
BACKEND_PID=$!

# Wait for backend to be ready (replace URL by real healthcheck if exists)
echo "Waiting for backend to be ready..."
for i in {1..15}; do
  if curl -s http://localhost:3001/api-docs > /dev/null; then
    echo "Backend is up."
    break
  fi
  echo "Waiting... ($i)"
  sleep 2
done

# Check backend status
if ! curl -s http://localhost:3001/api-docs > /dev/null; then
  echo "Backend failed to start."
  kill $BACKEND_PID
  exit 1
fi

echo "Starting frontend..."
cd ../frontend || exit
npm run dev &
FRONTEND_PID=$!

wait $BACKEND_PID $FRONTEND_PID
