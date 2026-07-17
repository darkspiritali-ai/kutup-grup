const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Ignore favicon.ico requests to prevent console errors
app.get('/favicon.ico', (req, res) => res.status(204).end());

// SPA Fallback: Route all unknown requests to index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(500).send(`
        <h1>Internal Server Error</h1>
        <p>Could not find dist/index.html.</p>
        <pre>${err.message}</pre>
        <p>Current directory: ${__dirname}</p>
      `);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

// Ensure we also listen on port 3000 if PORT is not 3000
if (PORT !== '3000' && PORT !== 3000) {
  app.listen(3000, '0.0.0.0', () => {
    console.log('Server also listening on port 3000');
  });
}

// Ensure we also listen on port 80 if PORT is not 80
if (PORT !== '80' && PORT !== 80) {
  app.listen(80, '0.0.0.0', () => {
    console.log('Server also listening on port 80');
  });
}
