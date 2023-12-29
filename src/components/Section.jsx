/* eslint-disable react/prop-types */
import Form from './Form';
import toTitleCase from './helpers';

function Section({ sectionData }) {
  const { sectionName, forms } = sectionData;
  return (
    <section>
      <h1>{toTitleCase(sectionName)}</h1>
      <Form formId={`${sectionName}-0`} formData={forms[0]} />
    </section>
  );
}

export default Section;
