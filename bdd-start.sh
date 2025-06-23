#!/bin/bash

if systemctl is-active --quiet mongod; then
  echo "MongoDB is already running."
else
  echo "Starting MongoDB..."
  sudo systemctl start mongod
  if systemctl is-active --quiet mongod; then
    echo "MongoDB started successfully."
  else
    echo "Failed to start MongoDB."
    exit 1
  fi
fi