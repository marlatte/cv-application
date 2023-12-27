/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Input from './Input';
import toTitleCase from './helpers';

function Form({ formData }) {
  const { sectionName, inputs } = formData;
  const [editMode, setEditMode] = useState(false);

  function handleClick() {
    setEditMode(!editMode);
  }

  return (
    <form className={sectionName}>
      <h1>{toTitleCase(sectionName)}</h1>
      {inputs.map(({ type, domId, init }) => (
        <Input
          key={domId}
          editMode={editMode}
          type={type}
          domId={domId}
          init={init}
        />
      ))}
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </form>
  );
}

export default Form;
