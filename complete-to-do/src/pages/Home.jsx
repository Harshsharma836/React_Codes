import { useState } from "react";
import ToDoAdd from "../componetns/AddToDO";
import ShowToDo from "../componetns/ShowToDo";
import Completed from "./Completed";

function Home(){

    const [toDO , setToDO] = useState([]);
    console.log(toDO)

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
        <div>
            <ToDoAdd addToDos = {addToDo} ></ToDoAdd>
            <ShowToDo toDo = {toDO} toogle = {toogle}></ShowToDo>
        </div>
    )
}

export default Home;