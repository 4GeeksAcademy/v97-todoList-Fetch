import React, { createContext, useState, useEffect} from 'react';

export const Context = createContext();

const API_URL= 'https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/viviannet97';

export default function ContextProvider(props) {

    const [todoList, setTodoList] = useState([]);
    
    useEffect(()=>{

        console.log("In the context Effect")
        fetchTodosInitalizaTodo();
        
    },[]);

    //GET METHOD

    const fetchTodosInitalizaTodo = async () => {
        try{
            //fetching todos
            const getResponse = await fetch(API_URL);

            console.log('get response:', getResponse) 

            if(getResponse.status === 404){

                const createResponse =  await fetch((API_URL),{
                    method: 'post',
                    body: JSON.stringify([]),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then((res)=> res.json());

                console.log('create response:', createResponse)
            }

            else{

                const data = await getResponse.json();

                setTodoList(data);
            }
        }
        catch(error){
            // check de user
            console.log('In the catch block', error)
        }
    }

    //PUT METHOD
    const updateTodos = async (newTodos) =>{

        setTodoList(newTodos);
        //UPDATING THE TODOS
        const response = await fetch(API_URL,{
            method: 'put',
            body: JSON.stringify(newTodos),
            headers: {"Content-Type": "application/json"}
        }).then((res)=>res.json())
    
    }
    return (
        <Context.Provider value={{ todoList, setTodoList, updateTodos}}>
            {props.children}
        </Context.Provider>
    )
}