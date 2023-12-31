/* eslint-disable react/prop-types */
import { useState } from 'react';
import toTitleCase from './helpers';
import Form from './Form';

function Section({ sectionName }) {
  const [children, setChildren] = useState([]);

  const onAddBtnClick = () => {
    setChildren(
      children.concat(
        <Form
          key={children.length}
          formId={children.length}
          sectionName={sectionName}
        />
      )
    );
  };

  if (sectionName === 'general-info' && children.length === 0) onAddBtnClick();

  return (
    <section>
      <h1>{toTitleCase(sectionName)}</h1>
      {children}
      {sectionName !== 'general-info' && (
        <AddEntryBtn onClick={onAddBtnClick} />
      )}
    </section>
  );
}

export default Section;

function AddEntryBtn({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Add an Entry
      </button>
    </div>
  );
}
