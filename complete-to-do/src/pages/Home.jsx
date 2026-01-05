import { useContext, useState } from "react";
import ToDoAdd from "../components/AddToDO";
import ShowToDo from "../components/ShowToDo";
import Completed from "./Completed";
import { ToDoContext } from "../context/ToDoContext";

function Home(){

    const store = useContext(ToDoContext);

    console.log(store.toDO)

    return (
        <div>
            <h1>Home Page</h1>

        
            <ToDoAdd ></ToDoAdd>
            <ShowToDo></ShowToDo>
        </div>
    )
}

export default Home;