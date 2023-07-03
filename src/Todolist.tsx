import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type FilterTypeValue = 'All' | 'Active' | 'Completed'

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
};

type PropsTypeTitle = {
    // tasks: Array<TaskType>; generics
    // filterItem: (value: FilterTypeValue) => void
    title1?: string;
    tasks: TaskType[]; // new syntax for array
    removeItem: (id: string) => void;
    addTask: (value: string) => void
};
export const Todolist = ({title1, tasks, removeItem, addTask}: PropsTypeTitle) => {
    const [value, setValue] = useState<FilterTypeValue>('All')
    const [inputValue, setInputValue] = useState<string>('')

    // Filter function
    const filterItem = (value: FilterTypeValue) => {
        setValue(value)
    }

    const universalFilter = (value: FilterTypeValue) => {
        filterItem(value)
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

    // Add Task function
    const universalAddTask = () => {
        addTask(inputValue);
        setInputValue('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            universalAddTask()
        }
    }

    const onClickAddTaskHandler = () => {
        universalAddTask()
    }

    // Change Value control e.currentTarget.value function

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    // Removed function
    const removedTask = (id: string) => {
        removeItem(id)
    }


    return (
        <div>
            <h3>
                {title1}
            </h3>
            <div>
                <input
                    value={inputValue}
                    onChange={changeValue}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={onClickAddTaskHandler}>text inside button</button>
            </div>
            <ul>
                {filterOfIsDone().map((el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone} readOnly/>
                            <span>{el.title}</span>
                            <button onClick={() => removedTask(el.id)}>x</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button onClick={() => universalFilter('All')}>All</button>
                <button onClick={() => universalFilter('Active')}>Active</button>
                <button onClick={() => universalFilter('Completed')}>Completed</button>
            </div>
        </div>
    );
}