/* eslint-disable react/prop-types */
import { useState } from 'react';
import { addDays, format } from 'date-fns';
import toTitleCase from './helpers';

export function FormItem({ editMode, type, domId, formId, init }) {
  const [content, setContent] = useState('');

  let displayView;

  let editInput;

  if (editMode) {
    switch (type) {
      case 'textarea':
        editInput = (
          <textarea
            name={domId}
            id={`${domId}-${formId}`}
            placeholder={init}
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
            placeholder={init}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            autoComplete={domId}
          />
        );
        break;
    }
  } else {
    switch (type) {
      case 'textarea':
        displayView = content ? (
          <p style={{ whiteSpace: 'pre-line' }} id={domId}>
            {content.replace(/\n{1,}/g, '\n').replace(/^/gm, '• ')}
          </p>
        ) : (
          ''
        );
        break;

      case 'month':
        displayView = content ? (
          // Add days to account for time difference between US and GMT.
          <p id={domId}>{format(addDays(content, 3), 'MMMM yyyy')}</p>
        ) : (
          ''
        );
        break;

      default:
        displayView = content ? <p id={domId}>{content}</p> : '';
        break;
    }
  }

  const editView = (
    <div className="form-item">
      <label htmlFor={`${domId}-${formId}`}>{`${toTitleCase(domId)}:`}</label>
      {editInput}
    </div>
  );

  return editMode ? editView : displayView;
}

export function JobDates({ editMode, formId }) {
  const [currentJob, setCurrentJob] = useState(false);

  const displayView = currentJob && <p>Present</p>;

  const editView = (
    <div className="form-item">
      <label htmlFor={`current-job-${formId}`}>Is this your current job?</label>
      <input
        type="checkbox"
        id={`current-job-${formId}`}
        checked={currentJob}
        onChange={() => setCurrentJob(!currentJob)}
      />
    </div>
  );

  return (
    <>
      <FormItem
        key="start-date"
        editMode={editMode}
        type="month"
        domId="start-date"
        formId={formId}
      />
      {editMode ? editView : displayView}
      {!currentJob && (
        <FormItem
          key="end-date"
          editMode={editMode}
          type="month"
          domId="end-date"
          formId={formId}
        />
      )}
    </>
  );
}
