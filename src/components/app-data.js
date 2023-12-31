const formTemplates = {
  'personal-information': [
    { type: 'text', domId: 'name', init: 'John Smith' },
    { type: 'email', domId: 'email', init: 'jsmith@example.com' },
    { type: 'tel', domId: 'phone', init: '555-555-5555' },
  ],
  education: [
    { type: 'text', domId: 'school', init: 'University...' },
    { type: 'text', domId: 'degree-level', init: 'Bachelor...' },
    {
      type: 'text',
      domId: 'degree-subject',
      init: 'Biology...',
    },
    { type: 'month', domId: 'graduation-date' },
  ],
  experience: [
    { type: 'text', domId: 'company', init: 'Company...' },
    { type: 'text', domId: 'position', init: 'Title...' },
    {
      type: 'textarea',
      domId: 'responsibilities',
      init: 'Separate entries by line.',
    },
    {
      type: 'job-dates',
    },
  ],
};

export default formTemplates;
