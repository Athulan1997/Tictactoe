import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import the default CSS file for global styles
import App from './App'; // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);