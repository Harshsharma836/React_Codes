import { useState } from 'react'
import './App.css'
import {Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import Completed from './pages/Completed';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | { "  "}
        <Link to="/completed">Completed</Link>
      </nav>

      <Routes>
        <Route path='/' element= {<Home></Home>} ></Route>
         <Route path='/completed' element= {<Completed></Completed>} ></Route>
      </Routes>


    </div>
  )
}


export default App
