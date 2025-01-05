import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App.tsx';
import reportWebVitals from '../src/reportWebVitals.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
