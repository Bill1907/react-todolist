import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import Todos from '../Todos/Todos';

function List() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };
  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => Object.assign(todo, {
      isComplete: todo.id === id ? !todo.isComplete : todo.isComplete,
    }));
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-content">
      <h1>
        What is your plan Today?
      </h1>
      <TodoForm onSubmit={addTodo} />
      <Todos
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}
export default List;
