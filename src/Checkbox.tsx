import React, {ChangeEvent} from 'react';

export type CheckBoxType = {
    checked: boolean
    callBack: ( isDone: boolean) => void
}
export const Checkbox = ({checked,callBack} : CheckBoxType) => {
    const checkBoxHandler = ( e: ChangeEvent<HTMLInputElement>) => {
        callBack( e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={checked} onChange={checkBoxHandler}/>
    );
};

