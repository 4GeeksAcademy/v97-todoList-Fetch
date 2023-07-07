import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo(props) {
  const { todo, removeTodo, index } = props;
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div
      id="input"
      className="d-flex flex-row d-grid gap-2"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      
    >
      <Link to={`/todo/${index}`}>
        <div >
          <p  style={{ marginBottom: "0px" }}>{todo}</p>
        </div>
      </Link>

      {showDelete && (
        <p id="deleteIcon" onClick={() => removeTodo(index)}>
          <i className="fa-solid fa-xmark fa-xs"></i>
        </p>
      )} 
    </div>
  );
}