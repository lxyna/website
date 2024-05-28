import { useState } from 'react';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Extracurriculars from './Extracurriculars';
import Contact from './Contact';
import CustomCursor from './CustomCursor';
import MusicPlayer from './MusicPlayer';
import './MusicPlayer.css'
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  console.log(currentPath);

  const renderPage = () => {
    if (currentPath === "/") {
      window.history.pushState("", "", "/")
      return <Home/>;
    }
    else if (currentPath === "/about") {
      window.history.pushState("", "", "/about")
      return <About/>;
    }
    else if (currentPath === "/education") {
      window.history.pushState("", "", "/education")
      return <Education/>;
    }
    else if (currentPath === "/experience") {
      window.history.pushState("", "", "/experience")
      return <Experience/>;
    }
    else if (currentPath === "/extracurriculars") {
      window.history.pushState("", "", "/extracurriculars")
      return <Extracurriculars/>;
    }
    else if (currentPath === "/contact") {
      window.history.pushState("", "", "/contact")
      return <Contact/>;
    } else {
      window.history.pushState("", "", "/")
      return <Home/>;
    }
  }

  return (
    <div className="App">
      <div id="star_container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Navbar setCurrentComponent={setCurrentPath}/>
      {renderPage()}
      <CustomCursor/>
      <MusicPlayer/>
    </div>
  );
}

export default App;
