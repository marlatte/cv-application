import Section from './Section';

function App() {
  return (
    <>
      <header>
        <h1>Build Your Resume</h1>
      </header>
      <main>
        <Section sectionName="personal-information" />
        <Section sectionName="education" />
        <Section sectionName="experience" />
      </main>
    </>
  );
}

export default App;
