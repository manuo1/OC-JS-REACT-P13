#!/bin/bash

if systemctl is-active --quiet mongod; then
  echo "Stopping MongoDB..."
  sudo systemctl stop mongod
  if systemctl is-active --quiet mongod; then
    echo "Failed to stop MongoDB."
    exit 1
  else
    echo "MongoDB stopped successfully."
  fi
else
  echo "MongoDB is not running."
fi
