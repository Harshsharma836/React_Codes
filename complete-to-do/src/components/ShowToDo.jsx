import { useContext, useMemo } from "react"
import { ToDoContext } from "../context/ToDoContext"

function ShowToDo(){

    const store = useContext(ToDoContext);

    // increaseQuantity
    // descreaseQuantity

    const toDos = useMemo(()=>{
        return store.toDO?.map((val)=>{
            return (
                <li key={val.id}>
                    <span onClick={(e) => store.toogle(val.id)}>
                        
                        {val.text}
                        {val.done ? "  done  " : "  false  " }
                    </span>

                </li>
            )
        })
    } , [store.toDO , store.toogle])

    return (
        <ul>{toDos}</ul>
    )
}

export default ShowToDo;