/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';

const toTitleCase = (str) =>
  str
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

function Form({ formData }) {
  const { formName, inputs } = formData;
  const [editMode, setEditMode] = useState(false);

  function handleClick() {
    setEditMode(!editMode);
  }

  return (
    <form className={formName}>
      <h1>{toTitleCase(formName)}</h1>
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

function Input({ editMode, type, domId, init }) {
  const [content, setContent] = useState(init);

  const displayView = <p id={domId}>{content}</p>;

  const editView = (
    <>
      <label htmlFor={domId} style={{ marginRight: 10 }}>{`${toTitleCase(
        domId
      )}:`}</label>
      <input
        type={type}
        name={domId}
        id={domId}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoComplete={domId}
      />
    </>
  );
  return editMode ? editView : displayView;
}

export default Form;
