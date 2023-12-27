/* eslint-disable react/prop-types */
import { useState } from 'react';
import toTitleCase from './helpers';

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

export default Input;
