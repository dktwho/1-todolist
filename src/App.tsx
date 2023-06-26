import React from "react";
import "./App.css";
import {TaskType, Todolist} from "./Todolist";


function App() {
    const title1 = "Base Stack";
    const title2 = 'Frontend Library and Framework';
    const title3 = 'Backend Stack';


    const tasks1: Array<TaskType>  = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "VueJS", isDone: false},
        {id: 5, title: "Angular", isDone: true},
        {id: 6, title: "Svelte", isDone: true},
    ];
    const tasks2: TaskType[] = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false},
    ];

    const tasks3:  TaskType[] = [
        {id: 1, title: "Redux", isDone: false},
        {id: 2, title: "Thunk/Saga", isDone: false},
        {id: 3, title: "Redux Tkt", isDone: false},
    ];

    return (
        <div className="App">
            <Todolist title1={`${title1} 1`} title2={title1} tasks={tasks1}/>
            <Todolist title1={`${title1} 2`} title2={title2} tasks={tasks2}/>
            <Todolist title1={`${title1} 3`} title2={title3} tasks={tasks3}/>
        </div>
    );
}

export default App;
