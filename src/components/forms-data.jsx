const formsData = {
  genInfo: {
    sectionName: 'general-info',
    inputs: [
      { type: 'text', domId: 'name', init: 'John Smith' },
      { type: 'email', domId: 'email', init: 'jsmith@example.com' },
      { type: 'tel', domId: 'phone', init: '555-555-5555' },
    ],
  },
  education: {
    sectionName: 'education',
    inputs: [
      { type: 'text', domId: 'school', init: 'University of Georgia' },
      { type: 'text', domId: 'degree-level', init: 'Bachelor of Art' },
      { type: 'number', domId: 'graduation-year', init: '2017' },
    ],
  },
};

export default formsData;
