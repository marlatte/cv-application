/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import toTitleCase from './helpers';

export function FormItem({ editMode, type, domId, formId, init }) {
  const [content, setContent] = useState(init);

  const displayView = <p id={domId}>{content}</p>;

  let editInput;

  switch (type) {
    case 'textarea':
      editInput = (
        <textarea
          name={domId}
          id={domId}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      );
      break;

    default:
      editInput = (
        <input
          type={type}
          name={`${domId}-${formId}`}
          id={`${domId}-${formId}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoComplete={domId}
        />
      );
      break;
  }

  const editView = (
    <div className="formItem">
      <label
        htmlFor={`${domId}-${formId}`}
        style={{ marginRight: 10 }}
      >{`${toTitleCase(domId)}:`}</label>
      {editInput}
    </div>
  );
  return editMode ? editView : displayView;
}

export function JobDates({ editMode }) {
  const [currentJob, setCurrentJob] = useState(false);

  const displayView = currentJob && <p>Present</p>;

  const editView = (
    <div className="formItem">
      <label htmlFor="current-job-0">Is this your current job?</label>
      <input
        type="checkbox"
        id="current-job-0"
        checked={currentJob}
        onChange={() => setCurrentJob(!currentJob)}
      />
    </div>
  );

  return (
    <>
      <FormItem
        key="job-start"
        editMode={editMode}
        type="month"
        domId="start-date-0"
        init="(start date)"
      />
      {editMode ? editView : displayView}
      {!currentJob && (
        <FormItem
          key="job-end"
          editMode={editMode}
          type="month"
          domId="end-date-0"
          init="(end date)"
        />
      )}
    </>
  );
}
