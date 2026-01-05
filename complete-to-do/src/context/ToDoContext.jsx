import { createContext, useState} from 'react';

const ToDoContext = createContext(null);

function ToDOProvider({ children }){

    const [toDO, setToDO] = useState([]);

    function addToDo(text){
        setToDO([ ...toDO , { id : Date.now() , text , done : false }])
    }

    function toogle(id){
        const updatedToDo = toDO.map((val)=>{
            return val.id == id ? {...val, done : !val.done} : val
        })
        setToDO(updatedToDo)
    }
    return (
        <ToDoContext.Provider value={{ toDO , setToDO , addToDo , toogle}} >
            {children}
        </ToDoContext.Provider>
    )
}

export {ToDoContext , ToDOProvider};