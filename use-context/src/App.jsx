import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Couter from './components/counter';
import { useContext } from 'react';
import { ContextCounter } from './context/Counter';
import Message from './components/Message';

function App() {

  const counterState = useContext(ContextCounter);
  console.log("counterState Values  -> " + JSON.stringify(counterState))

  return (
    <div>
       <Message></Message>
        
    </div>
  )
}

export default App
