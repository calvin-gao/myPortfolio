// import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Intro from './components/introComponent';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Projects';
import Skill from './components/Skills';
import Extra from './components/Extra';



function App() {
  return (
    <div class="App">
      <Intro />
      <AboutMe/>
      <Education/>

      <div class="container">
        <div class="row">
          <div class="col">
            <Experience/>
          </div>
          <div class="col">
            <Project/>
          </div>
        </div>
      </div>
      <Skill/>
      <Extra/>
    </div>

    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit Calvin <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
