import { useCallback, useContext, useState } from "react"
import { ToDoContext } from "../context/ToDoContext";

function ToDoAdd(){

    const [text , settext] = useState("");

    const store = useContext(ToDoContext);
    
    const save = useCallback( (function save(){
        store.addToDo(text);
        settext("")
    } ) , [text , store.addToDo])

    return (
        <div>
            <input type="text" value={text} onChange={(e) => settext(e.target.value)}></input>
            <button onClick={save}> Save </button>
        </div>
    )
}

export default ToDoAdd