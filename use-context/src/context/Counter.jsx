import {createContext, useState } from 'react';


/*
    createContext -> It create an Store
    CounterProvider -> It uses for sending store values to all component
    useContext -> It use for take the values of store

*/
export const ContextCounter = new createContext(); // Store

export const CounterProvider = (props) =>{

    console.log("Propsss")
    console.log(props)
    const [count, setCount] = useState(0);
    return(
        <ContextCounter.Provider value={{count , setCount}}>   
            {props.children}
        </ContextCounter.Provider>
    )
}

