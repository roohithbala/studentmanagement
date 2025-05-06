```markdown
# Student Management System

This is a Spring Boot-based web application for managing student records. It provides functionalities to add, view, update, and delete student information. The application uses MongoDB as the database and includes a simple frontend built with HTML, CSS, and JavaScript.

## Features

- Add new students with details such as roll number, name, email, and department.
- View a list of all students.
- Update student details.
- Delete student records.
- Responsive design for better user experience on different devices.

## Project Structure

```
demo/
├── src/
│   ├── main/
│   │   ├── java/com/example/demo/
│   │   │   ├── controller/       # REST controllers
│   │   │   ├── model/            # Data models
│   │   │   ├── repository/       # MongoDB repositories
│   │   │   ├── service/          # Business logic
│   │   │   └── DemoApplication.java # Main application entry point
│   │   ├── resources/
│   │   │   ├── static/           # Frontend files (HTML, CSS, JS)
│   │   │   └── application.properties # Configuration
│   └── test/                     # Unit tests
├── pom.xml                       # Maven configuration
└── README.md                     # Project documentation
```

## Technologies Used

- **Backend**: Spring Boot, Spring Data MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDB
- **Build Tool**: Maven

## Endpoints

### Student API

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/api/students`           | Get all students               |
| GET    | `/api/students/{rollNumber}` | Get a student by roll number   |
| POST   | `/api/students`           | Add a new student              |
| PUT    | `/api/students/{id}`      | Update student details         |
| DELETE | `/api/students/{id}`      | Delete a student               |

## Setup Instructions

### Prerequisites

- Java 17 or higher
- Maven
- MongoDB

### Steps to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd demo
   ```

2. Configure MongoDB:
   Update the `application.properties` file with your MongoDB connection details.

3. Build the project:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

5. Access the application:
   Open your browser and navigate to `http://localhost:8080`.

## Frontend Pages

- **Add Student**: `add-student.html`
- **View Students**: `view-students.html`
- **Manage Students**: `manage-students.html`

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Spring Boot documentation: [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
- MongoDB documentation: [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
```

Feel free to customize this `README.md` file further based on your specific requirements.
