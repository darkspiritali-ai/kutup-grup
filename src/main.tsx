import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'
import './performance.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Notify vite-plugin-prerender that the page is fully loaded and ready to be pre-rendered
setTimeout(() => {
  document.dispatchEvent(new Event('custom-render-trigger'));
}, 100);
