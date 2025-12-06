#!/usr/bin/env bash
set -e

# Run the AI predictor to (re)generate predictions file
echo "Running AI predictor..."
python3 ../ai_model/churn_risk_ai.py || echo "Predictor failed (continuing): $?"

# Start the Node.js server
echo "Starting server..."
exec node server.js
