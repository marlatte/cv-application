import React from 'react';
import ReactDOM from 'react-dom/client';
import './App';
import Form from './Form';
import formsData from './forms-data';
import '../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form formData={formsData.genInfo} />
    <Form formData={formsData.education} />
  </React.StrictMode>
);
