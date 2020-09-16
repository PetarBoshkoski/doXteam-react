import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js'
import Navbar from './components/Navbar.js' 
import MainContent from "./components/MainContent.js"
import ToDoItem from './components/ToDoItem.js'
import ContactCard from './components/ContactCard.js'
import {p} from './components/Joke.js'
import productsData from './data/productsData'
import Product from './components/Product'
import todosData from './data/todosData'
import Conditional from './components/Conditional'
import './style.css';

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        isLoading: true
      }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }
  render() {
    return (
        <div>
          {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
        </div>
    )
  }
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

  /*
const todoItems = todosData.map(item => <ToDoItem key = {item.id} item={item}/>)
  return (
    <div className="todo-list">
      <h1>TODO Things</h1>
      {todoItems}
    </div>
  */


  /* 
Defining class-based components
  
class Header extends React.Component {
  render() {
        return(
              <div>
                    <p>Greetings {this.props.username}</p>
              </div>
        )
  }
}

class Greeting extends React.Component {

  render() {
        const date = new Date();
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
              timeOfDay = "morning"
        }
        else if (hours >= 12 && hours < 17) {
              timeOfDay = "afternoon"
        }
        else {
              timeOfDay = "night"
        }
        return (
              <div>
                    <h1>Good {this.timeOfDay} to you, sir od madam.</h1>
              </div>
        )
  }
}
  */

  /* State
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      answer : "Yes"
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>Is state good to know?
              <p>{this.state.answer}</p>
      </div>
    )
  }
}
  */

  /*
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name : "Petar",
      age: 23
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}
  */

  /* State practice
  class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name : "Petar",
      age: 23
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}
  */

  /* Exercise
  class App extends React.Component {
    constructor() {
        super()
        this.state = {
          isLoggedIn: true
        }
    }
  

  render() {
    let wordDisplay
    if(this.state.isLoggedIn ? wordDisplay = "in" : "out") 
    
    // if (this.state.isLoggedIn) {
    //   wordDisplay = "in"
    //   }
    // else {
    //   wordDisplay = "out"
    // }

    return (
      <div>
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
    )    
  }
}
  */

  /* Exercise 
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todoItems = this.state.todos.map(item => <ToDoItem key = {item.id} item={item} /> );
    console.log(todoItems)
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}
  */

  /* Handling Events 
class App extends React.Component {
  constructor() {
    super()
      this.state = {
        todos: todosData
      }
  }
  render() {
      console.log(this.state.todos)
      const todoItems = this.state.todos.map((item)=>  <ToDoItem key = {item.id} item = {item}/>)
    return (
      <div>
        <img onMouseOver={() => console.log("I was hovered")}src="https://www.fillmurray.com/200/100" />
        <br />
        <br />
        <button onClick={() => console.log("I was clicked!")}>Click me!</button>
        {todoItems}
      </div>
    )
  }
}
  */

  /* State changing
class App extends React.Component {
  constructor() {
    super()
      this.state = {
        count: 0
      }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
  */

  /* State changing, updating Todo list exercise
  class App extends React.Component {
  constructor() {
    super()
      this.state = {
        todos: todosData
      }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map((item) => <ToDoItem key = {item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className='todo-list'>
        {todoItems}
      </div>
    )
  }
}
*/