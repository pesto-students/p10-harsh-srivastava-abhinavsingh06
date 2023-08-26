import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {}}
          className="complete-checkbox"
        />
        <span className="checkmark"></span>
      </label>
      <span className={`todo-text ${todo.completed ? "completed-text" : ""}`}>
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        &#10006;
      </button>
    </div>
  );
};

export default TodoItem;
