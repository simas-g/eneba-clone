# Eneba

A game search application built with React, TypeScript, Express, and SQLite.

## Project Structure

```
eneba/
├── client/          # React + TypeScript frontend
└── server/          # Express backend with SQLite database
```

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

### 1. Install Server Dependencies

```bash
cd server
npm install
```

### 2. Install Client Dependencies

```bash
cd ../client
npm install
```

### 3. Environment Variables

#### Server

Create a `.env` file in the `server/` directory:

```env
PORT=3000
```

#### Client

Create a `.env` file in the `client/` directory:

```env
VITE_BACKEND_URL=http://localhost:3000
```

## Running the Project

### Development Mode

You need to run both the server and client in separate terminals.

#### Terminal 1 - Start the Server

```bash
cd server
npm run dev
```

The server will start on `http://localhost:3000`

#### Terminal 2 - Start the Client

```bash
cd client
npm run dev
```

The client will start on `http://localhost:5173` (or another port if 5173 is occupied)

### Production Build

#### Build the Client

```bash
cd client
npm run build
```

The built files will be in the `client/dist/` directory.

#### Start the Server (Production)

```bash
cd server
npm start
```

## Available Scripts

### Server

- `npm run dev` - Start the development server
- `npm start` - Start the production server
- `npm run build` - Install dependencies

### Client

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## API Endpoints

- `GET /` - Health check
- `GET /api/health` - Server status
- `GET /list` - Get all games
- `GET /list?search=<query>` - Search games by query

## Technologies Used

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Query (TanStack Query)
- Lucide React (Icons)

### Backend
- Express.js
- SQLite (better-sqlite3)
- CORS
- dotenv

