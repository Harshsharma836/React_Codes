import { useState } from "react"
import incrementCounter from "./functions/incrementCounter.jsx"
import resetCounter from "./functions/resetCounter.jsx"

function App() {

    const [counter, setCounter] = useState(5)

    return (
        <div>
            <div>Hello World</div>
            <div>{counter}</div>

            <button onClick = {incrementCounter({counter , setCounter})} >Increase</button>
            <button onClick = {resetCounter ({setCounter})} >Reset</button>
        </div>
    )
}

export default App
