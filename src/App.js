// import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Intro from './components/introComponent';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Intro />
      <AboutMe/>
      <Education/>
      <Experience/>
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
