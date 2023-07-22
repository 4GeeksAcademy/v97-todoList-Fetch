import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'

import { Context } from '../Context.jsx'

export default function TodoPage() {

    const { todoList } = useContext(Context);
    const { index } = useParams();

    const todo = todoList[index];

    return (
        <div>
            <h1 id="h1TodoPage">todo Page for todo {index}</h1>
            <p>{todo.label}</p>

            <Link to="/">
                <p>Go home</p>
            </Link>
        </div>
    )
}