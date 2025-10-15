# 🏙️ Urban Maintenance - Basic Container

Simple API to manage urban issues.

## 🚀 How to use

### 1. Clone the repository
```bash
git clone https://github.com/ReinaldoCandeo/conteiner-recomenda.git
cd conteiner-recomenda
```

### 2. Start the container
```bash
docker-compose up
```

### 3. Access the API
```bash
# Test in browser or with curl
curl http://localhost:3000
```

## 📡 Endpoints

- `GET /` - Home page
- `GET /api/issues` - List issues
- `POST /api/issues` - Create issue

## 📝 Usage example

```bash
# List issues
curl http://localhost:3000/api/issues

# Create issue
curl -X POST http://localhost:3000/api/issues \
  -H "Content-Type: application/json" \
  -d '{"title":"Pothole in street","description":"Large pothole"}'
```

## 🛠️ Structure

```
├── backend/
│   ├── index.js         # Node.js server
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml   # Orchestration
```

## 🔧 Commands

```bash
# Start
docker-compose up

# Stop
docker-compose down

# View logs
docker-compose logs -f

# Rebuild
docker-compose up --build
```

---

**Simple and straight to the point! 🎯**

