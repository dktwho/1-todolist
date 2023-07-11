import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./Button";
import styled from './Todolist.module.css'
import {Checkbox} from "./Checkbox";

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
    const [error, setError] = useState<string | null>('')

    const universalFilter = (value: FilterTypeValue) => {
        setValue(value)
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
            universalFilter('All')

        } else {
            setError('Value is required')
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            universalAddTask()
            universalFilter('All')
        }
    }

    // Change Value control e.currentTarget.value function

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setInputValue(e.currentTarget.value)
    }

    // Removed function
    const removedTask = (id: string) => {
        removeItem(id)
    }

    const onChangeHandler = (tId: string, isDone: boolean) => {
        changeIsDone(tId, isDone)
    }

    const result = filterOfIsDone().map((el) => {
        return (
            <li key={el.id} className={el.isDone ? styled.isDone : ''}>
                <Checkbox checked={el.isDone} callBack={( isDone) =>onChangeHandler(el.id, isDone) }   />
                <span>{el.title}</span>
                <Button className={''} callback={() => removedTask(el.id)} name={'x'}></Button>
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
                    className={error ? styled.error : ''}
                    value={inputValue}
                    onChange={changeValue}
                    onKeyPress={onKeyPressHandler}
                />
                <Button className={''} callback={universalAddTask} name={'Add'}></Button>
                {error && <div className={styled.errorMessage}>{error}</div>}
            </div>
            <ul>
                {result}
            </ul>
            <div>
                <Button
                    className={value === 'All' ? styled.activeFilter : ''}
                    callback={() => universalFilter('All')}
                    name={'All'}></Button>
                <Button
                    className={value === 'Active' ? styled.activeFilter : ''}
                    callback={() => universalFilter('Active')}
                    name={'Active'}></Button>
                <Button
                    className={value === 'Completed' ? styled.activeFilter : ''}
                    callback={() => universalFilter('Completed')}
                    name={'Completed'}></Button>
            </div>
        </div>
    );
}