# CaarZy Node API

Node.js backend service for **CaarZy**, a vehicle marketplace platform.

This project is being developed as a production-oriented backend service with a focus on clean architecture, REST APIs, PostgreSQL, automated testing, Docker, and CI/CD.

## 🚀 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- `pg` PostgreSQL client
- dotenv
- Docker
- GitHub Actions
- GitHub Container Registry
- REST API

## 🏗️ Architecture

The application follows a layered architecture:

```text
HTTP Request
     ↓
   Routes
     ↓
 Controllers
     ↓
  Services
     ↓
 Repositories
     ↓
 PostgreSQL
```

### Responsibilities

**Routes**
- Define API endpoints
- Map HTTP requests to controllers

**Controllers**
- Handle HTTP requests and responses
- Validate request parameters
- Return appropriate HTTP status codes

**Services**
- Contain business logic
- Coordinate application operations

**Repositories**
- Handle database access
- Contain SQL queries
- Keep persistence logic separate from business logic

**Database**
- PostgreSQL connection pool shared with the CaarZy application

## 📁 Project Structure

```text
caarzy-node-api/
│
├── src/
│   ├── config/
│   │   └── env.js
│   │
│   ├── controllers/
│   │   └── orderController.js
│   │
│   ├── services/
│   │   └── orderService.js
│   │
│   ├── repositories/
│   │   └── orderRepository.js
│   │
│   ├── routes/
│   │   └── orderRoutes.js
│   │
│   ├── database/
│   │   └── pool.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│
├── .github/
│   └── workflows/
│
├── .env.example
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Prerequisites

Before running the project, install:

- Node.js 20+
- npm
- PostgreSQL 14+
- Git

Check your versions:

```bash
node --version
npm --version
psql --version
git --version
```

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/caarzy-node-api.git
```

Navigate into the project:

```bash
cd caarzy-node-api
```

Install dependencies:

```bash
npm ci
```

> `npm ci` is used for reproducible dependency installation based on `package-lock.json`.

## 🔐 Environment Configuration

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

On Windows PowerShell, you can also create the file manually.

Example:

```env
NODE_ENV=development
PORT=3000

DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=your_database
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

### Environment Variables

| Variable | Description | Example |
|---|---|---|
| `NODE_ENV` | Application environment | `development` |
| `PORT` | API server port | `3000` |
| `DB_HOST` | PostgreSQL host | `127.0.0.1` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_DATABASE` | PostgreSQL database | `caarzy` |
| `DB_USER` | PostgreSQL username | `postgres` |
| `DB_PASSWORD` | PostgreSQL password | `your-password` |

> Never commit `.env` to Git. Secrets should be provided through environment variables or CI/CD secret management.

## 🗄️ Database

The Node.js API uses PostgreSQL.

The application currently connects to the same PostgreSQL database used by the CaarZy backend.

The Node.js service does **not** create a separate database.

Make sure the required database and tables exist before starting the API.

## ▶️ Running the Application

Start the API:

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

A successful startup should display:

```text
Database connected successfully
CaarZy Node API running on port 3000
```

## 🔌 API

### Car Availability

Check whether a vehicle is currently reserved:

```http
GET /api/cars/:carId/availability
```

Example:

```bash
curl http://localhost:3000/api/cars/1/availability
```

Example response:

```json
{
  "car_id": 1,
  "available": false,
  "status": "reserved"
}
```

The availability status is determined from the vehicle order state.

A vehicle is considered reserved when an active reservation exists with:

```text
order_type = reserve
status = pending OR approved
```

Cancelled or rejected reservations do not make the vehicle unavailable.

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Tests are intended to cover:

- API endpoints
- Business logic
- Repository/database behavior
- Error handling
- Validation

## 🐳 Docker

The application is designed to run as a containerized Node.js service.

Build the Docker image:

```bash
docker build -t caarzy-node-api .
```

Run the container:

```bash
docker run --env-file .env -p 3000:3000 caarzy-node-api
```

When running inside Docker, PostgreSQL connection settings may differ from local development.

For example, when PostgreSQL is running on the Windows host, Docker can use:

```text
host.docker.internal
```

instead of:

```text
127.0.0.1
```

## 🔄 CI/CD

The project uses GitHub Actions for automated CI/CD.

The planned pipeline includes:

```text
Pull Request
     ↓
Install dependencies
     ↓
Lint
     ↓
Run tests
     ↓
Build
     ↓
Docker image
     ↓
Container Registry
     ↓
Deployment
     ↓
Health Check
```

The goal is to ensure that code merged into the main branch passes automated validation before deployment.

## 🔒 Security

The application follows basic backend security practices including:

- Environment-based configuration
- No credentials committed to Git
- Parameterized PostgreSQL queries
- Input validation
- Centralized error handling
- Dependency auditing
- Least-privilege database access where applicable

Security practices will be expanded as the application grows.

## 🧑‍💻 Development

Run the application during development:

```bash
npm run dev
```

Before creating a pull request, make sure:

```bash
npm test
```

passes successfully.

Additional linting and formatting checks will be enforced through CI.

## 🌱 Development Roadmap

Planned improvements include:

- [ ] Complete car availability API
- [ ] Request validation
- [ ] Centralized error handling
- [ ] Unit and integration tests
- [ ] Health check endpoint
- [ ] Structured logging
- [ ] Docker support
- [ ] GitHub Actions CI
- [ ] Automated Docker image publishing
- [ ] Automated deployment
- [ ] Graceful application shutdown
- [ ] API documentation
- [ ] Authentication and authorization
- [ ] Monitoring and observability
- [ ] Performance optimization

## 📌 Design Principles

The project aims to follow:

- Separation of concerns
- Single responsibility
- Clear API boundaries
- Parameterized database queries
- Testable business logic
- Configuration through environment variables
- Reproducible builds
- Automated quality checks
- Containerized deployment

The architecture will remain intentionally simple until additional complexity is justified by actual requirements.

## 📄 License

License information will be added when the project is prepared for public distribution.