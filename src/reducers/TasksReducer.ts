import {TaskType} from "../Todolist";
import {v4} from "uuid";

export const TasksReducer = (state: TaskType[], action: ActionsType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK' : {
            return state.filter(t => t.id !== action.payload.id)
        }

        case 'ADD-TASK' : {
            return [{id: v4(), title: action.payload.value, isDone: false}, ...state]
        }

        case 'CHANGE-IS-DONE': {
            return state.map(el => el.id === action.payload.id ? {...el, isDone: action.payload.newIsDone} : el)
        }

        default :
            return state
    }
}

type ActionsType = RemoveTaskACType | AddTaskACType | ChangeIsDoneACType


type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
    return {type: 'REMOVE-TASK', payload: {id}} as const
}

type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (value: string) => {
    return {type: 'ADD-TASK', payload: {value}} as const
}

type ChangeIsDoneACType = ReturnType<typeof changeIsDoneAC>
export const changeIsDoneAC = (id: string, newIsDone: boolean) => {
    return {type: 'CHANGE-IS-DONE', payload: {id, newIsDone}} as const
}