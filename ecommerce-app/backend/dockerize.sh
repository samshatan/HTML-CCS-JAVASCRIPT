#!/bin/bash

# Your Docker Hub username
USERNAME="samshatan"

# List of services (you can modify this anytime)
SERVICES=(
  "apigateway"
  "user-authenthication"
  "order-and-cart-management"
  "product-service"
  "service-discovery"
)

for SERVICE in "${SERVICES[@]}"; do
  echo "-----------------------------------------------"
  echo "Building and pushing Docker image for: $SERVICE"
  echo "-----------------------------------------------"
  
  # Enter service directory
  cd "$SERVICE" || { echo "Directory $SERVICE not found! Skipping..."; continue; }

  # Build
  docker buildx build -t "$USERNAME/$SERVICE" .

  # Push
  docker push "$USERNAME/$SERVICE"

  # Return to backend root folder
  cd ..
done

echo "-----------------------------------------------"
echo "✅ All services built and pushed successfully!"
echo "-----------------------------------------------"
