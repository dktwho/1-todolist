import React from "react";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

type PropsTypeTitle = {
    title1: string;
    title2?: string;
    title3?: string;
    // tasks: Array<TaskType>; generics
    tasks: TaskType[]; // new syntax for array
};

export const Todolist = ({title1, title2, title3, tasks}: PropsTypeTitle) => {
    return (
        <div>
            <h3>
                {title1} - {title2} {title3}
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
