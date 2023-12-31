/* eslint-disable react/prop-types */
import { useState } from 'react';
import toTitleCase from './helpers';
import Form from './Form';

function AddEntryBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Add an Entry
    </button>
  );
}

function RemoveEntryBtn({ onClick, formId }) {
  return (
    <button
      type="button"
      className="remove-btn"
      onClick={onClick}
      data-form-id={formId}
    >
      Delete
    </button>
  );
}

function Section({ sectionName }) {
  const [counter, setCounter] = useState(0);
  const [formList, setFormList] = useState([]);

  const onAddBtnClick = () => {
    setFormList(formList.concat({ id: counter, name: sectionName }));
    setCounter(counter + 1);
  };

  if (sectionName === 'personal-information' && formList.length === 0)
    onAddBtnClick();

  return (
    <section className={sectionName}>
      <h2>{toTitleCase(sectionName)}</h2>
      {formList.map(({ id, name }) => (
        <Form key={id} formId={id} sectionName={name}>
          <RemoveEntryBtn
            formId={id}
            onClick={() => {
              setFormList(formList.filter((entry) => entry.id !== id));
            }}
          />
        </Form>
      ))}
      {sectionName !== 'personal-information' && (
        <AddEntryBtn onClick={onAddBtnClick} />
      )}
    </section>
  );
}

export default Section;
