import React from "react";
import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  return (
    <>
      <div>
        <h2>Todo List:- </h2>
        {todos.map((todoItem) => {
          return (
            <TodoItems
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              isCompleted={todoItem.completed}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
