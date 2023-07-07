import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function ContextProvider(props) {

    const [todoList, setTodoList] = useState([]);

    return (
        <Context.Provider value={{ todoList, setTodoList }}>
            {props.children}
        </Context.Provider>
    )
}