import React from 'react';
import ReactDOM from 'react-dom/client';
import './App';
import Section from './Section';
import appData from './app-data';
import '../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Section sectionData={appData[2]} />
  </React.StrictMode>
);
