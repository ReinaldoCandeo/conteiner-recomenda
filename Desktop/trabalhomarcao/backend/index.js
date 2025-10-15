const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.json({ 
    message: '🏙️ API Zeladoria Urbana funcionando!',
    status: 'OK'
  });
});

// Listar ocorrências
app.get('/api/ocorrencias', (req, res) => {
  res.json({
    ocorrencias: [
      { id: 1, titulo: 'Buraco na rua', status: 'Aberto' },
      { id: 2, titulo: 'Lâmpada queimada', status: 'Em análise' }
    ]
  });
});

// Criar ocorrência
app.post('/api/ocorrencias', (req, res) => {
  const { titulo, descricao } = req.body;
  res.json({
    message: 'Ocorrência criada!',
    ocorrencia: { id: 3, titulo, descricao, status: 'Aberto' }
  });
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});

