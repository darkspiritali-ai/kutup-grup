import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import './performance.css'

const rootElement = document.getElementById('root')!

// Check if #root contains pre-rendered DOM elements
if (rootElement.hasChildNodes() && rootElement.children.length > 0) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    {
      onRecoverableError(error, errorInfo) {
        console.error('[Hydration Recovery Error]', error, errorInfo);
      }
    }
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
