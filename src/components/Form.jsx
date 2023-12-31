/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FormItem, JobDates } from './Input';
import formTemplates from './app-data';

function Form({ formId, sectionName, children }) {
  const inputs = formTemplates[sectionName];
  const [editMode, setEditMode] = useState(true);

  function handleClick() {
    setEditMode(!editMode);
  }

  return (
    <form className={`${sectionName}-${formId}`}>
      {sectionName !== 'personal-information' && children}
      {inputs.map(({ type, domId, init }) =>
        type === 'job-dates' ? (
          <JobDates key="job-dates" editMode={editMode} formId={formId} />
        ) : (
          <FormItem
            key={domId}
            editMode={editMode}
            type={type}
            domId={domId}
            formId={formId}
            init={init}
          />
        )
      )}
      <button type="button" onClick={handleClick}>
        {editMode ? 'Save' : 'Edit'}
      </button>
    </form>
  );
}

export default Form;
