import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";

//App component -- component that main.js can render to create the UI
export default function App() {
  const [todos, setTodos] = useState([]); //gets the todos so far as an array, starts off as an empty array

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, //can't directly mutate todos because states are IMMUTABLE. so have to use spread operator!
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  //when you press the check box, it should cross out (toggle) the todo item in currentTodos. if not toggled, return the current todos untoggled
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  //when you press the delete button. it should delete the todo with id = passed in id.
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      //this makes it to where only todo items that have an id equal to passed in id become deleted.
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  }
  return (
    <>
      <NewTodoForm onAdd={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos = {todos}/>
    </>
  );
}
