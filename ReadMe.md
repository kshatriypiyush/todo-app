# ToDo Application

## Overview
This is a simple ToDo application built with a Java Spring Boot backend (REST API) and an Angular frontend.  
The app allows users to:

- Add tasks (with Title, Description, Due Date)
- List all tasks
- Mark tasks as completed using a checkbox
- Delete tasks

> **Note:** This app does **not** use any database. Data is stored in memory for simplicity.

---

## Folder Structure

todo-api/

├── frontend/ (Angular frontend app)

├── todo-api/ (Spring Boot backend app)

└── README.md (This file)


---

## How to Run Locally

### Backend (Spring Boot)

1. Navigate to backend directory:
   ```bash
   cd todo-api/todo-api

2. Run the Spring Boot app:
   ```bash
   ./mvnw spring-boot:run
   or
    mvn spring-boot:run

The backend server will start on http://localhost:8080

### Frontend (Angular)

1. Navigate to frontend directory:
   ```bash
   cd todo-api/frontend

2. Install dependencies:
   ```bash
   npm install

3. Run Angular app:
   ```bash
   ng serve

The frontend will be available at http://localhost:4200 and communicates with the backend at port 8080.
