import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js'
import Navbar from './components/Navbar.js' 
import MainContent from "./components/MainContent.js"
import ToDoItem from './components/ToDoItem.js'
import ContactCard from './components/ContactCard.js'
import Joke from './components/Joke.js'
import productsData from './data/productsData'
import Product from './components/Product'
import todosData from './data/todosData'
import './style.css';
function App() {
  const todoItems = todosData.map(item => <ToDoItem key = {item.id} item={item}/>)
  return (
    <div className="todo-list">
      <h1>TODO Things</h1>
      {todoItems}
    </div>
  )
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

 /* <div> Exercise
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

/* Exercise
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
  );*/

  /* Exercise
  <div className="contacts">
    <ContactCard 
      contact ={{name:"Flaffy",
      imgUrl: "http://placekitten.com/300/300",
      phone: "(1) 1271 4155",
      email:"flaffy@catnap.meow"
  }}/>
    </div>
  */

  /* Exercise
  const productComponents = [
    {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "Perfect"
    },
    {
        id: "2",
        name: "Pen",
        price: 1,
        description: "Good"
    },
].map(item => <Product key={item.id} product={item} />)
  return (
    <div>
      {productComponents}
    </div>
  )
  */