import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";

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
    changeIsDone: (id: string, newIsDone: boolean) => void
};
export const Todolist = ({title1, tasks, removeItem, addTask, changeIsDone}: PropsTypeTitle) => {
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
        if (inputValue.trim()) {
            addTask(inputValue.trim());
            setInputValue('')
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            universalAddTask()
        }
    }

    // Change Value control e.currentTarget.value function

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    // Removed function
    const removedTask = (id: string) => {
        removeItem(id)
    }

    const result = filterOfIsDone().map((el) => {

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            changeIsDone(el.id, e.currentTarget.checked)
        }
        return (
            <li key={el.id}>
                <input type="checkbox" checked={el.isDone} onChange={onChangeHandler}/>
                <span>{el.title}</span>
                <Button callback={() => removedTask(el.id)} name={'x'}></Button>
            </li>
        );
    })


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
                <Button callback={universalAddTask} name={'Add'}></Button>
            </div>
            <ul>
                {result}
            </ul>
            <div>
                <Button callback={() => universalFilter('All')} name={'All'}></Button>
                <Button callback={() => universalFilter('Active')} name={'Active'}></Button>
                <Button callback={() => universalFilter('Completed')} name={'Completed'}></Button>
            </div>
        </div>
    );
}