import React from "react";
import "./App.css";
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

function App() {
    const title = "what to learn";
    const title2 = 100500;
    const title3 = true;

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "VueJS", isDone: false},
        {id: 5, title: "Angular", isDone: true},
        {id: 6, title: "Svelte", isDone: true},
    ];
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false},
    ];

    const tasks3 = [
        {id: 1, title: "Redux", isDone: false},
        {id: 2, title: "Thunk/Saga", isDone: false},
        {id: 3, title: "Redux Tkt", isDone: false},
    ];

    return (
        <div className="App">
            <Todolist title={title} title2={title2} tasks={tasks1}/>
            <Todolist title={`${title} 2`} title3={title3} tasks={tasks2}/>
            <Todolist title={`${title} 2`} title3={title3} tasks={tasks3}/>
        </div>
    );
}

export default App;
