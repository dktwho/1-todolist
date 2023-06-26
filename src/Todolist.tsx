import React, {useState} from "react";

type FilterTypeValue = 'All' | 'Active' | 'Completed'

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

type PropsTypeTitle = {
    title1?: string;
    // tasks: Array<TaskType>; generics
    tasks: TaskType[]; // new syntax for array
    removeItem: (id: number) => void;
    // filterItem: (value: FilterTypeValue) => void
};
export const Todolist = ({title1, tasks, removeItem,}: PropsTypeTitle) => {
    const [value, setValue] = useState<FilterTypeValue>('All')

    const filterItem = (value: FilterTypeValue) => {
        setValue(value)
    }
    const filterOfIsDone = () => {
        let taskForTodoList = tasks
        if (value === 'Active') {
            return tasks.filter(el => !el.isDone)
        }
        if (value === 'Completed') {
            return tasks.filter(el => el.isDone)
        }
        return taskForTodoList
    }

    let taskForTodoList = filterOfIsDone()

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
                {taskForTodoList.map((el) => {
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
                <button onClick={() => filterItem('All')}>All</button>
                <button onClick={() => filterItem('Active')}>Active</button>
                <button onClick={() => filterItem('Completed')}>Completed</button>
            </div>
        </div>
    );
};
