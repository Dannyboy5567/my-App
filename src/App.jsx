// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//src/App.js

import React from "react";
import './App.css';
import Home from "./components/Home";
import Example from './components/Hooks';
const App = () => {
return (
  <div className="App">
<Home/>
<Example/>
  </div>
);
};
export default App;


