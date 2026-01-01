import { useCallback, useState } from "react"

function ToDoAdd({addToDos}){

    const [text , settext] = useState("");
    
    const save = useCallback( (function save(){
        addToDos(text);
        settext("")
    } ) , [text , addToDos])

    return (
        <div>
            <input type="text" value={text} onChange={(e) => settext(e.target.value)}></input>
            <button onClick={save}> Save </button>
        </div>
    )
}

export default ToDoAdd