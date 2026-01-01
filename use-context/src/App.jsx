import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Couter from './components/counter';
import { useContext } from 'react';
import { ContextCounter } from './context/Counter';

function App() {
  // const [count, setCount] = useState(0);

  const counterState = useContext(ContextCounter);
  console.log("counterState Values  -> " + JSON.stringify(counterState))

  return (
    <div>
        {counterState.count}

        <Couter></Couter>
        <Couter></Couter>
        <Couter></Couter>
        <Couter></Couter>
        
    </div>
  )
}

export default App
