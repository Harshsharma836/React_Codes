import { useContext } from "react";
import { ContextCounter } from "../context/Counter";

function Couter(){

    const storeValues = useContext(ContextCounter);

    return (
        <div>
            <button onClick={() => storeValues.setCount(storeValues.count + 1)}>Increment</button>
            <button>Descrement</button>
        </div>
    )
}

export default Couter;