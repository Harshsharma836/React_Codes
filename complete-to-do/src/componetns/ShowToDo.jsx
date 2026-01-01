import { useMemo } from "react"

function ShowToDo({toDo , toogle}){
    const toDos = useMemo(()=>{
        return toDo.map((val)=>{
            return (
                <li key={val.id}>
                    <span onClick={(e) => toogle(val.id)}>
                        {val.text}
                        {val.done ? "  done  " : "  false  " }
                       
                    </span>
                </li>
            )
        })
    } , [toDo , toogle])

    return (
        <ul>{toDos}</ul>
    )
}

export default ShowToDo;