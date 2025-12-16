import { useState } from "react"
import incrementCounter from "./functions/incrementCounter.jsx"
import resetCounter from "./functions/resetCounter.jsx"

function App() {

    const [toDOId , setToDOId] = useState(1)

    const [toDo , setToDO] = useState([
        {
            id : Date.now(),
            value : "Default Task",
            completed : false
        }
    ])

    function addToDO(){

        const Item = {
            id : Date.now(),
            value : "Hello Added Task",
            completed : false
        }

        setToDO([...toDo , Item])
    }

    return (
        <div>
            
            <br></br>
            {
                toDo.map( (item) => {
                    return (
                        console.log(item),
                        <div key={item.id} >{item.value}</div>
                    )
                })
            }

            <br></br><br></br>
            <button  onClick={addToDO}>Add To DO</button>


        </div>
    )
}


function makeValueEmpty(props){
        return function (){
            console.log('makeValueEmpty called')
            props.setvalue("")
        }
        
}

export default App




