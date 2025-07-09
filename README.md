# SkillUp - Online Course Tracker

A full-stack Java + React app to track online learning progress across platforms like Udemy, Coursera, and YouTube.

## Features

- Add & view learning courses
- Track completion percentage (coming soon)
- RESTful API with Spring Boot
- Responsive frontend with React.js (coming on Day 4)

## Tech Stack

- Backend: Java, Spring Boot, JPA, H2
- Frontend: React.js (planned)
- Tools: Git, IntelliJ, Postman, Swagger

## API Endpoints

- `POST /api/courses` - Add a course
- `GET /api/courses` - Get all courses
- `GET /api/courses/{id}` - Get course by ID

## How to Run

```bash
cd backend
./mvnw spring-boot:run
