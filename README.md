# Full-Stack To-Do List Application (Angular + Spring Boot)

This is a simple yet complete full-stack web application built to demonstrate the integration of an Angular frontend with a Spring Boot REST API backend. The application allows users to manage a list of to-do items with full CRUD (Create, Read, Update, Delete) functionality.

This project was built as a step-by-step guide for learning how these technologies work together.

## Technologies Used

### Backend
*   **Java 21**
*   **Spring Boot 3**
    *   Spring Web (for REST APIs)
    *   Spring Data JPA (for database interaction)
*   **PostgreSQL** (as the relational database)
*   **Maven** (for dependency management and build)
*   **Hibernate** (as the JPA provider)

### Frontend
*   **Angular 15**
*   **TypeScript**
*   **Bootstrap 5** (for responsive styling and components)
*   **Angular CLI** (for project generation and management)

### API Documentation
*   **Springdoc OpenAPI (Swagger UI)** (for interactive REST API documentation)

## Features
*   View all to-do items in a list.
*   Add a new to-do item via a form.
*   Mark a to-do as complete or incomplete by clicking a checkbox.
*   The text of a completed item is styled with a line-through.
*   Delete a to-do item from the list.
*   Responsive user interface that works on both desktop and mobile browsers.
*   All changes are persisted in the PostgreSQL database.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
*   **Java Development Kit (JDK)**: Version 17 or newer (this project uses JDK 21).
*   **Apache Maven**: For building the backend project.
*   **PostgreSQL**: A running instance of the PostgreSQL database server.
*   **Node.js and npm**: Required for the Angular frontend.
*   **Angular CLI**: Version 15 specifically. Install with `npm install -g @angular/cli@15`.

## Setup and Installation

### 1. Backend Setup (`todo-app`)

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/BHAVYAA-SINGH/todo-project.git
    cd todo-project
    ```

2.  **Create the PostgreSQL Database**:
    Open `psql` or your favorite database management tool and run the following command to create the database:
    ```sql
    CREATE DATABASE todo_db;
    ```

3.  **Configure Database Connection**:
    Open the `src/main/resources/application.properties` file in the `todo-app` directory. Update the `spring.datasource` properties with your PostgreSQL username and password.
    ```properties
    # PostgreSQL Database Configuration
    spring.datasource.url=jdbc:postgresql://localhost:5432/todo_db
    spring.datasource.username=your_postgres_username
    spring.datasource.password=your_postgres_password

    # JPA/Hibernate Configuration
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    spring.jpa.show-sql=true
    ```

4.  **Build the Project**:
    Navigate to the `todo-app` root directory and run the Maven build command:
    ```bash
    mvn clean install
    ```

### 2. Frontend Setup (`todo-frontend`)

1.  **Navigate to the Frontend Directory**:
    From the project root, move into the frontend folder:
    ```bash
    cd ../todo-frontend
    ```

2.  **Install npm Dependencies**:
    Run the following command to download and install all the required packages defined in `package.json`:
    ```bash
    npm install
    ```

## Running the Application

You must start the backend server before starting the frontend application.

### 1. Run the Backend Server

Navigate to the `todo-app` directory and run the Spring Boot application using Maven:
```bash
mvn spring-boot:run
```
Alternatively, you can run the `main` method in the `TodoAppApplication.java` file from your IDE.

The backend server will start on `http://localhost:8080`.

### 2. Run the Frontend Application

In a separate terminal, navigate to the `todo-frontend` directory and run the Angular development server:
```bash
ng serve
```
The frontend application will be available at `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## API Documentation (Swagger UI)

Once the backend server is running, you can view and interact with the automatically generated API documentation. Open your browser and navigate to:

[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

This interface allows you to test all the API endpoints directly without needing the frontend.