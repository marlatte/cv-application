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
          { type: 'text', domId: 'degree-level', init: 'Bachelor of Arts' },
          {
            type: 'text',
            domId: 'degree-subject',
            init: 'International Affairs',
          },
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
            type: 'textarea',
            domId: 'responsibilities',
            init: '- Analyze\n- Develop\n- Edit',
          },
          {
            type: 'job-dates',
            inputs: [
              { type: 'month', domId: 'start-date', init: '2018-03' },
              { type: 'checkbox', domId: 'current', init: '' },
              { type: 'month', domId: 'end-date', init: '' },
            ],
          },
        ],
      },
    ],
  },
];

export default appData;

export const formTemplates = {
  'general-info': [
    { type: 'text', domId: 'name', init: 'John Smith' },
    { type: 'email', domId: 'email', init: 'jsmith@example.com' },
    { type: 'tel', domId: 'phone', init: '555-555-5555' },
  ],
  education: [
    { type: 'text', domId: 'school', init: 'University of Georgia' },
    { type: 'text', domId: 'degree-level', init: 'Bachelor of Arts' },
    {
      type: 'text',
      domId: 'degree-subject',
      init: 'International Affairs',
    },
    { type: 'number', domId: 'graduation-year', init: '2017' },
  ],
  experience: [
    { type: 'text', domId: 'company', init: 'IronArch Technology' },
    { type: 'text', domId: 'position', init: 'Research Analyst' },
    {
      type: 'textarea',
      domId: 'responsibilities',
      init: '- Analyze\n- Develop\n- Edit',
    },
    {
      type: 'job-dates',
      inputs: [
        { type: 'month', domId: 'start-date', init: '2018-03' },
        { type: 'checkbox', domId: 'current', init: '' },
        { type: 'month', domId: 'end-date', init: '' },
      ],
    },
  ],
};
