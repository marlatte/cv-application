import '../styles/App.css';
import Section from './Section';
import appData from './app-data';

function App() {
  return appData.map((section) => (
    <Section key={section.sectionName} sectionData={section} />
  ));
}

export default App;
