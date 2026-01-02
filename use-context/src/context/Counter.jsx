import {createContext, useState } from 'react';
/*
    createContext -> It create an Store
    CounterProvider -> It uses for sending store values to all component
    useContext -> It use for take the values of store
*/
export const ContextCounter = new createContext(); // Store

export const CounterProvider = (props) =>{ // All Component 

    const [count, setCount] = useState(0);

    const name = () =>{
        return "harsh";
    }

    const msg = "common message to all"

    return(
        <ContextCounter.Provider value={{count , setCount, name , msg}}> 
            {props.children}
        </ContextCounter.Provider>
    )
}

