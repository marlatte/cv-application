import React from 'react';
import ReactDOM from 'react-dom/client';
import './App';
import '../styles/index.css';
import Form from './Form';

const formsData = {
  genInfo: {
    formName: 'general-info',
    inputs: [
      { type: 'text', domId: 'name', init: 'John Smith' },
      { type: 'email', domId: 'email', init: 'jsmith@example.com' },
    ],
  },
  education: {
    formName: 'education',
    inputs: [
      { type: 'text', domId: 'school', init: 'University of Georgia' },
      {
        type: 'text',
        domId: 'degree',
        init: 'Bachelor of Arts',
      },
    ],
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form formData={formsData.genInfo} />
    <Form formData={formsData.education} />
  </React.StrictMode>
);
