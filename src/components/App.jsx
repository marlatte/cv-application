import '../styles/App.css';
import Section from './Section';

function App() {
  return (
    <>
      <header>
        <h1>Build Your Resume</h1>
      </header>
      <Section sectionName="personal-information" />
      <Section sectionName="education" />
      <Section sectionName="experience" />
    </>
  );
}

export default App;
