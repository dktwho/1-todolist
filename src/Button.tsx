import React from 'react';

type ButtonTypeProps = {
    name: string;
    callback: () => void
}

export function Button({name, callback}: ButtonTypeProps) {
    const onClickHandler = ( ) => {
        callback()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
}

