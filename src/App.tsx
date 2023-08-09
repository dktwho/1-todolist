import React, {useReducer, useState} from "react";
import "./App.css";
import {TaskType, Todolist} from "./Todolist";
import {v4} from 'uuid';
import {addTaskAC, removeTaskAC, TasksReducer} from "./reducers/TasksReducer";


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
    const [tasks, tasksDispatch] = useReducer(TasksReducer, tasks1)

    const addTask = (value: string) => {
        // setTasks([{id: v4(), title: value, isDone: false}, ...tasks])
        tasksDispatch(addTaskAC(value))
    }

    const changeIsDone = (idTask: string, newIsDone: boolean) => {
        // setTasks(tasks.map(el => el.id === idTask ? {...el, isDone: newIsDone} : el))
    }

    const removeItem = (id: string) => {
         tasksDispatch(removeTaskAC(id))

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
