import React from 'react';

type ButtonTypeProps = {
    name: string;
    callback: () => void
    className: string
}

export function Button({name, callback,className}: ButtonTypeProps) {
    const onClickHandler = ( ) => {
        callback()
    }
    return (
        <button className={className} onClick={onClickHandler}>{name}</button>
    );
}

