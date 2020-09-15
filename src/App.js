import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js'
import Navbar from './components/Navbar.js'
import MainContent from "./components/MainContent.js"
import './style.css';
function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning"
  }
  else if(hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  }
  else {
    timeOfDay = "night"
  }

  const styles = {
    color: "rgba(255, 0, 0, 0.5)", 
    backgroundColor: "rgba(255, 0, 255, 0.5",
    fontSize: 24
  }
  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
      <h2>It's currently {hours} o'clock.</h2>

   </div>
  );
}

export default App;

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

 /* <div>
      <Navbar />
      <MainContent />
      <Footer />
      <table>
        <tbody>
          <tr>
            <input type="checkbox"></input> <span>Buy milk</span>
          </tr>
          <tr>
          <input type="checkbox"></input> <span>Check laundry</span>
          </tr>
          <tr>
          <input type="checkbox"></input> <span>Study</span>
          </tr>
          <tr>
          <input type="checkbox"></input> <span>Go to sleep</span>
          </tr>
        </tbody>
      </table>
    </div>
    */