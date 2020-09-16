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

/* Ternary operators exercise
class App extends React.Component {
  constructor() {
    super()
      this.state = {
        unreadMessages: [
          "Message 1",
          "Message 2"
        ]
      }
  }
  render() {
    return (
        <div>
          {this.state.unreadMessages.length > 0 && <h2>You have {this.state.unreadMessages.length} messages unread</h2>}
        
        </div>
    )
  }
}
export default App;
*/

/* Login and logout exercise
class App extends React.Component {
  constructor() {
      super()
      this.state = {
        isLoggedIn: false
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
  handleClick() {
     this.setState(prevState => {
       return {
         isLoggedIn: !prevState.isLoggedIn
       }
     })
  }
  
  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
        <div>
          <button onClick={this.handleClick}>{buttonText}</button>
          <h1>{displayText}</h1>
        </div>
    )
  }
}
*/

/* Fully working TODO App
class App extends React.Component {
  constructor() {
      super()
      this.state = {
        isLoggedIn: false,
        todos: todosData
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
  
  handleClick() {
     this.setState(prevState => {
       return {
         isLoggedIn: !prevState.isLoggedIn
       }
     })
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
    const todoItems = this.state.todos.map((item) => <ToDoItem key = {item.id} item = {item} handleChange={this.handleChange}/>)
    console.log(todoItems)
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
    return (
        <div>
          <div className="todo-list">
          {todoItems}
          </div>
          <button onClick={this.handleClick}>{buttonText}</button>
          <h1>{displayText}</h1>
        </div>
    )
  }
}
*/
/* Fetching data from an API

class App extends React.Component {
  constructor() {
      super()
      this.state = {
        character: {},
        loading: true
      }
    }
  
  componentDidMount() {

    var targetUrl = "https://api.randomuser.me/"
    fetch(targetUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        character: data.results[0],
        loading: false
      })
    })
  }
  render() {
    return (
      
        <div>
          {this.state.loading ? <p>loading</p> : <p>{this.state.character.name.first}</p>}
          
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
        firstName: "",
        lastName: "",
        isFriendly: false,
        gender: "",
        favColor: ""
      }
      this.handleChange = this.handleChange.bind(this)
    }
  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    // if(type === "radio") { this.setState({[name]: value}) }
  }
  handleSubmit(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    // if(type === "radio") { this.setState({[name]: value}) }
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} /> 
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} /> 
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <textarea value={this.state.firstName + " " + this.state.lastName} onChange={this.handleChange}>
        </textarea>
        <br />
        <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/> Is friendly?
        <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/> Male
        <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/> Female
        <br />
        <br />
        <label>Favorite color?</label>
        <br />
        <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
        <h3>You are a {this.state.gender}</h3>
        <h3>Your favorite color is {this.state.favColor}</h3>
        <button>Submit</button>
      </form>
    )
  }
}
*/

/* Complete form
class App extends React.Component {
  constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        dietaryRestrictions: {
          isVegan : false,
          isKosher : false,
          isLactoseFree: false
        }
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({
        [name]: checked
      }) :
      this.setState({
        [name]: value
      })
    }
    
  render() {
    return (
      <main>
        <form>
          <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" /> <br /><br />
          <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /> <br /><br />
          <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" /> <br /><br />
          <label>
              <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} onChange={this.handleChange}/>Male <br />
              <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"} onChange={this.handleChange}/>Female <br /> <br />
              <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                <option value="">--- Please choose a country ---</option>
                <option value="Germany">Germany</option>
                <option value="Norway">Norway</option>
              </select>
              <br />
          </label>
          <label>
            <input type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.isVegan} />Vegan? <br />
            <input type="checkbox" name="isKosher" onChange={this.handleChange} checked={this.state.isKosher} />Kosher? <br />
            <input type="checkbox" name="isLactoseFree" onChange={this.handleChange} checked={this.state.isLactoseFree} />Lactose Free? <br />
          </label>
        </form>
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions: <br />
          Vegan: {this.state.isVegan ? "Yes" : "No"} <br/>
          Kosher: {this.state.isKosher ? "Yes" : "No"} <br />
          Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
        </p>
      </main>
    )
  }
}
*/