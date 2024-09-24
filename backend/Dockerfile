# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY requirements.txt /app/

# Install uvicorn and any other needed packages
RUN pip install --no-cache-dir uvicorn && \
    pip install --no-cache-dir -r requirements.txt

# Copy the contents of the 'src' directory into the container at /app
COPY src /app/

# Make port 80 available to the world outside this container
EXPOSE 3100

# Set environment variables
ENV NAME "bkmbigo-afyayangu-backend"
ENV GOOGLE_APPLICATION_CREDENTIALS "/bkmbigo-afyayangu-creds.json"

#guicorn alternative
CMD [gunicorn -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT main:app]