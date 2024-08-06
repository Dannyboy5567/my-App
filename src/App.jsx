// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//src/App.js
// function App(){
//   const[count,setCount] =useState( 0)

// };

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from '/componentsabout';
import Navbar from "./components/navbar";
import React from "react";
import Counter from "/components/counter";
import '/App.css'
import Home from './components/Home';
import Example from './components/Hooks';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>

        <Home/>

        <Example/>
        <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<about/>}/>
        </Routes>
      </div>
    </Router>


  
  );
};
export default App;


