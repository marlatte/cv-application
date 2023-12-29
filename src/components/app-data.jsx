const appData = [
  {
    sectionName: 'general-info',
    forms: [
      {
        inputs: [
          { type: 'text', domId: 'name', init: 'John Smith' },
          { type: 'email', domId: 'email', init: 'jsmith@example.com' },
          { type: 'tel', domId: 'phone', init: '555-555-5555' },
        ],
      },
    ],
  },
  {
    sectionName: 'education',
    forms: [
      {
        inputs: [
          { type: 'text', domId: 'school', init: 'University of Georgia' },
          { type: 'text', domId: 'degree-level', init: 'Bachelor of Art' },
          { type: 'number', domId: 'graduation-year', init: '2017' },
        ],
      },
    ],
  },
  {
    sectionName: 'experience',
    forms: [
      {
        inputs: [
          { type: 'text', domId: 'company', init: 'IronArch Technology' },
          { type: 'text', domId: 'position', init: 'Research Analyst' },
          {
            type: 'textArea',
            domId: 'responsibilities',
            init: '- Analyze\n- Develop\n- Edit',
          },
          { type: 'number', domId: 'graduation-year', init: '2017' },
        ],
      },
    ],
  },
];

export default appData;
