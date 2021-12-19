import './App.css';
import './sass/App.scss';
import './sass/Navigation.scss';
import './sass/Project.scss';
import './components/Navigation';
import './components/AboutMe';
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation/>
        <h1 className="portfolio-owner">Reuella Jacob</h1>
        <AboutMe/>
      <ProjectList/>
            <Skills/>
    </div>
  );
}

export default App;
