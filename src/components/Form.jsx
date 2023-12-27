/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';

function Form(name) {
  const [mode, setMode] = useState(false);

  function handleClick() {
    setMode(!mode);
  }

  return (
    <form className={name}>
      <Input mode={mode} type="text" id="name" />
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </form>
  );
}

function Input({ mode, type, id }) {
  return (
    mode && (
      <label>
        {id}
        <input type={type} name={id} id={id} />
      </label>
    )
  );
}

export default Form;
