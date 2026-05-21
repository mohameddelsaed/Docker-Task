# Message Sharing App

A beginner-friendly full-stack web application where users can submit messages and view all saved messages.

## Tech Stack

- Frontend: React with Vite
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- API communication: Fetch API

## Project Structure

```text
project-root/
├── frontend/
└── backend/
```

## Backend Setup

1. Go to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create your environment file:

```bash
copy .env.example .env
```

4. Make sure MongoDB is running locally, then start the backend:

```bash
npm run dev
```

The backend runs at:

```text
http://localhost:5000
```

## Frontend Setup

1. Open a second terminal and go to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

The frontend runs at:

```text
http://localhost:3000
```

## REST API

### Get all messages

```http
GET /messages
```

### Create a message

```http
POST /messages
Content-Type: application/json

{
  "text": "Hello from Zikola!"
}
```

## Notes

- No Docker is required.
- No Kubernetes is required.
- No authentication is included.
- The app is intentionally simple and beginner-friendly.
