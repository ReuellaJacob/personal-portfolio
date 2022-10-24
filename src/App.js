import { useState } from 'react';
import './App.css';
import './sass/App.scss';
import './sass/Navigation.scss';
import './sass/Project.scss';
import './components/Navigation';
import './components/AboutMe';
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/old_components/ProjectList";
import Skills from "./components/old_components/Skills";

function App() {
  return (
    <div className="App">
      <Navigation/>
        <AboutMe/>
      {/*<ProjectList/>*/}
        <div>
            <Skills/>
        </div>
    </div>
  );
}

export default App;
