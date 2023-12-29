/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FormItem, JobDates } from './Input';

function Form({ formId, formData }) {
  const { inputs } = formData;
  const [editMode, setEditMode] = useState(false);

  function handleClick() {
    setEditMode(!editMode);
  }

  return (
    <form className={formId}>
      {inputs.map(({ type, domId, init }) =>
        type === 'job-dates' ? (
          <JobDates key="job-dates" editMode={editMode} />
        ) : (
          <FormItem
            key={domId}
            editMode={editMode}
            type={type}
            domId={`${domId}-0`}
            init={init}
          />
        )
      )}
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </form>
  );
}

export default Form;
