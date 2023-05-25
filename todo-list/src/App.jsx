//App component -- component that main.js can render to create the UI
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState(""); //useState takes in initial value (in this case an empty string) for input text box
  const [todos, setTodos] = useState([]); //gets the todos so far as an array, starts off as an empty array

  function handleSubmit(e) {
    e.preventDefault(); //makes it so the page doesn't reload before
    setTodos((currentTodos) => {
      return [
        ...currentTodos, //can't directly mutate todos because states are IMMUTABLE. so have to use spread operator!
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem(""); //sets newItem to empty string (the input with id = "item" becomes empty so that user can enter new item)
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
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
