import React from "react";
import {TaskType} from "./App";

type PropsTypeTitle = {
    title: string;
    title2?: number;
    title3?: boolean;
    // tasks: Array<TaskType>; generics
    tasks: TaskType[]; // new syntax for array
};

export const Todolist = ({title, title2, title3, tasks}: PropsTypeTitle) => {
    return (
        <div>
            <h3>
                {title} - {title2}  {title3}
            </h3>
            <div>
                <input/>
                <button>text inside button</button>
            </div>
            <ul>
                {tasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone} readOnly/>
                            <span>{el.title}</span>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
