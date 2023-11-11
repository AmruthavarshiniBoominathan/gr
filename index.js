import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot instead of ReactDOM
import App from './App';

const root = createRoot(document.getElementById('root'));  // Use createRoot to create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
