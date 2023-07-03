import React, {ChangeEvent, useState} from "react";


type FilterTypeValue = 'All' | 'Active' | 'Completed'

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;

};

type PropsTypeTitle = {
    title1?: string;
    // tasks: Array<TaskType>; generics
    tasks: TaskType[]; // new syntax for array
    removeItem: (id: string) => void;
    // filterItem: (value: FilterTypeValue) => void
    addTask: (value: string) => void
};
export const Todolist = ({title1, tasks, removeItem, addTask}: PropsTypeTitle) => {
    const [value, setValue] = useState<FilterTypeValue>('All')
    const [inputValue, setInputValue] = useState('')


    const filterItem = (value: FilterTypeValue) => {
        setValue(value)
    }

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onClickAddTask = () => {
        addTask(inputValue);
        setInputValue('')
    }
    const filterOfIsDone = () => {

        switch (value) {
            case 'Active': {
                return tasks.filter(el => !el.isDone)
            }
            case 'Completed': {
                return tasks.filter(el => el.isDone)
            }
            default:
                return tasks
        }
    }

    return (
        <div>
            <h3>
                {title1}
            </h3>
            <div>
                <input value={inputValue} onChange={changeValue} />
                <button onClick={onClickAddTask} >text inside button</button>
            </div>
            <ul>
                {filterOfIsDone().map((el) => {
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
}