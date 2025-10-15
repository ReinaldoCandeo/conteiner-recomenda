const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: '🏙️ Urban Maintenance API is running!',
    status: 'OK'
  });
});

// List issues
app.get('/api/issues', (req, res) => {
  res.json({
    issues: [
      { id: 1, title: 'Pothole in street', status: 'Open' },
      { id: 2, title: 'Broken streetlight', status: 'In review' }
    ]
  });
});

// Create issue
app.post('/api/issues', (req, res) => {
  const { title, description } = req.body;
  res.json({
    message: 'Issue created!',
    issue: { id: 3, title, description, status: 'Open' }
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

