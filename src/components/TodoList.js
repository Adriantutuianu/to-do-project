import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* For each object we can render out a Todo component :  */}
        {todos.map((todo) => (
          <Todo text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
