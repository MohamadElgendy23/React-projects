import { useState } from "react";
import { TodoList } from "./TodoList";

//component for the new todo form (contains label, input, and button)
export function NewTodoForm() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    //starts off as an empty array if nothing in todos
    if (localValue === null) {
      return [];
    }
    //show persisting data every state instance
    return JSON.parse(localValue);
  });
  //makes data persist (not dissappear) even when reloading when todos is "altered" in anyway
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  //handles when form has been submitted
  function handleSubmit(e) {
    e.preventDefault(); //makes it so the page doesn't reload before
    newItem.length !== 0 && addTodo(newItem); //add newItem to currentTodos if newItem isnt empty
    setNewItem(""); //sets newItem to empty string (the input with id = "item" becomes empty so that user can enter new item)
  }

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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
