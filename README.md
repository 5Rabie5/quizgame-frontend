# 🎮 Quiz Multiplayer Game - Frontend

This is the frontend for a multiplayer quiz game, supporting Arabic, English, and German.

## Features
- Language selector (ar, en, de)
- Player name and room code input
- LocalStorage saving
- Docker-ready

## Setup
```bash
npm install
ng serve
```

## Docker
```bash
docker build -t quiz-frontend .
docker run -p 80:80 quiz-frontend
```
