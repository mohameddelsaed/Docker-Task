k8s:
server.js: process.env.MONGODB_URI || "mongodb://mongo-service:27017/message-sharing-app";

api_url: const API_URL = "http://192.168.49.2:30619/messages";