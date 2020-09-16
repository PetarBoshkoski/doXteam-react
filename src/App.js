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
import FormContainer from './forms/FormContainer'
import './style.css';

function App() {
  return (
    <div>
      <FormContainer />
    </div>
  )
}
export default App;