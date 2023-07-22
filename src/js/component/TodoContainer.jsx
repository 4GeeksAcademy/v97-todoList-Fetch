import React, { useState, useContext } from "react";
import Todo from "./Todo.jsx";
import { Context } from "../Context.jsx";

export default function TodoContainer() {
  const [userInput, setUserInput] = useState("");
  const { todoList, setTodoList, updateTodos } = useContext(Context);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    console.log(value);
    setUserInput(event.target.value);
  };

  const removeTodo = (index) => {
   
    // const newTodos = setTodoList(todoList.filter((list, key) => index !== key));
    const newTodos = todoList.filter((list, key) => index !== key);
    updateTodos(newTodos);

    return console.log(todoList);
  };

  // [...] spread operator , creat copy of the element

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      updateTodos(todoList.concat([{ label: userInput, done: false }]));
      setUserInput("");
    }
  };

  // function todoListArr(todo, index) {
  //   return (
  //     <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
  //   );
  // }

  
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={userInput}
          onChange={onChangeHandler}
          onKeyUp={addTodoHandler}
          required
          placeholder="What need to be done?"
        />
      </form>

      {/* {todoList.map(todoListArr)} */}
      {todoList.map((todo, index) => <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />)}

      <p id="itemsLeft">{todoList.length} items left</p>
    
    </>
  );
}
