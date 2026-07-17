const express = require('express');
const path = require('path');

const app = express();

// Simple request logging for diagnostics
app.use((req, res, next) => {
  console.log(`[Diagnostic Log] Request: ${req.method} ${req.url}`);
  next();
});

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

// Deployment platforms expose the application through the port supplied in
// PORT. Binding additional ports (especially 80) can cause port conflicts and
// prevents the platform's proxy from detecting the service reliably.
const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error) => {
  console.error(`Failed to listen on port ${PORT}:`, error);
  process.exitCode = 1;
});

function shutdown(signal) {
  console.log(`${signal} received. Shutting down gracefully.`);
  server.close(() => process.exit(0));
}

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));
