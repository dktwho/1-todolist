import React, {useState} from "react";
import "./App.css";
import {TaskType, Todolist} from "./Todolist";
import {v4} from 'uuid';


function App() {
    const title1 = "Base Stack";


    let tasks1: Array<TaskType> = [
        {id: v4(), title: "HTML&CSS", isDone: true},
        {id: v4(), title: "JS", isDone: true},
        {id: v4(), title: "ReactJS", isDone: false},
        {id: v4(), title: "VueJS", isDone: false},
        {id: v4(), title: "Angular", isDone: true},
        {id: v4(), title: "Svelte", isDone: true},
    ];
    const [tasks, setTasks] = useState(tasks1)

    const addTask = (value: string) => {
        setTasks([{id: v4(), title: value, isDone: false}, ...tasks])
    }

    const changeIsDone = (idTask: string, newIsDone: boolean) => {
        setTasks(tasks.map(el => el.id === idTask ? {...el, isDone: newIsDone} : el))
    }

    const removeItem = (id: string) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <Todolist
                title1={`${title1} 1`}
                tasks={tasks}
                removeItem={removeItem}
                addTask={addTask}
                changeIsDone={changeIsDone}
            />
        </div>
    );
}

export default App;
