import React from "react";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

type PropsTypeTitle = {
    title1?: string;
    // tasks: Array<TaskType>; generics
    tasks: TaskType[]; // new syntax for array
    removeItem: (id: number) => void
};
export const Todolist = ({title1, tasks, removeItem}: PropsTypeTitle) => {
    return (
        <div>
            <h3>
                {title1}
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
                            <button onClick={() => removeItem(el.id)}>x</button>
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
