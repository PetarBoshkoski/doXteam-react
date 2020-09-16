import React from "react"

class FormContainer extends React.Component {
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
  export default FormContainer;
  