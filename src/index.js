import React from 'react';
import ReactDOM from 'react-dom/client';

import './Assets/Styles/index.scss';

import { Dashboard } from './Pages/Dashboard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);