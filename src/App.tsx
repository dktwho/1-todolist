import React, {useState} from "react";
import "./App.css";
import {TaskType, Todolist} from "./Todolist";


function App() {
    const title1 = "Base Stack";

    let tasks1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "VueJS", isDone: false},
        {id: 5, title: "Angular", isDone: true},
        {id: 6, title: "Svelte", isDone: true},
    ];
    const [tasks, setTasks] = useState(tasks1)
    const removeItem = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <Todolist
                title1={`${title1} 1`}
                tasks={tasks}
                removeItem={removeItem}
                // filterItem={filterItem}
            />
        </div>
    );
}

export default App;
