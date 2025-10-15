# 🏙️ Zeladoria Urbana - Container Básico

API simples para gerenciar ocorrências urbanas.

## 🚀 Como usar

### 1. Clone o repositório
```bash
git clone https://github.com/ReinaldoCandeo/conteiner-recomenda.git
cd conteiner-recomenda
```

### 2. Inicie o container
```bash
docker-compose up
```

### 3. Acesse a API
```bash
# Teste no navegador ou com curl
curl http://localhost:3000
```

## 📡 Endpoints

- `GET /` - Página inicial
- `GET /api/ocorrencias` - Lista ocorrências
- `POST /api/ocorrencias` - Cria ocorrência

## 📝 Exemplo de uso

```bash
# Listar ocorrências
curl http://localhost:3000/api/ocorrencias

# Criar ocorrência
curl -X POST http://localhost:3000/api/ocorrencias \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Buraco na rua","descricao":"Grande buraco"}'
```

## 🛠️ Estrutura

```
├── backend/
│   ├── index.js         # Servidor Node.js
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml   # Orquestração
```

## 🔧 Comandos

```bash
# Iniciar
docker-compose up

# Parar
docker-compose down

# Ver logs
docker-compose logs -f

# Rebuild
docker-compose up --build
```

---

**Simples e direto ao ponto! 🎯**

