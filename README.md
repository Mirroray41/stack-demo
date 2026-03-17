# Full-Stack User Management Demo

A lightweight, proof-of-concept application built to demonstrate a modern full-stack architecture. This project serves as a practical showcase of integrating a robust Java Spring Boot backend with a strongly-typed React frontend.

## Tech Stack

**Backend:**
* **Java 17+**
* **Spring Boot** (REST API, Spring Web)
* **Spring Data JPA** (Hibernate)
* **PostgreSQL** (Relational Database)

**Frontend:**
* **React 18**
* **TypeScript** (Strict type safety and interface definitions)
* **Vite** (Next-generation, fast build tool)
* **SCSS / Sass** (Modular component styling)

## Project Overview

This application implements a basic CRUD (Create, Read, Update, Delete) User Management system. The primary goal is to demonstrate a clean, end-to-end data flow—from database persistence to a responsive user interface.

**Key features demonstrated:**
* RESTful API design using Spring Boot Controllers.
* Dependency Injection (Constructor Injection) in Java.
* Relational data mapping using `@Entity` and JPA.
* Fast and modern frontend scaffolding using Vite.
* Type-safe data fetching and React hook state management.

### Architectural Notes (Next Steps)
While this demo is fully functional, in a production/enterprise environment, I would implement the following architectural improvements:
1. **Service Layer:** Introduce a `@Service` layer between the Controller and Repository to handle business logic.
2. **DTOs (Data Transfer Objects):** Map database Entities to DTOs before sending them to the client to prevent exposing sensitive internal models.
3. **Global State Management:** Utilize React Context or a state library (like Redux or Zustand) to manage global state, avoiding prop-drilling or isolated custom hook instances.
4. **Error Handling:** Implement robust exception handling (`@ControllerAdvice`) on the backend and better fallback UI states on the frontend.

## How to Run Locally

### 1. Database Setup
Ensure you have PostgreSQL installed and running locally. Create a database for the project and update the `application.properties` (or `application.yml`) file in the Spring Boot backend:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/your_db_name
spring.datasource.username=your_user
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

2. Running the Backend (Spring Boot)

Navigate to the backend directory and run the application using your IDE or Gradle wrapper:

```bash
./gradlew bootRun
```

The API will be available at http://localhost:8080.
3. Running the Frontend (React + Vite)

Navigate to the frontend directory, install dependencies, and start the Vite development server:

```bash
npm install
npm run dev
```

The frontend will typically be available at http://localhost:5173.
