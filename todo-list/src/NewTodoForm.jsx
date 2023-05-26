import { useState } from "react";

//component for the new todo form (contains label, input, and button)
export function NewTodoForm({ onAdd }) {
  const [newItem, setNewItem] = useState(""); //useState takes in initial value (in this case an empty string) for input text box
  //handles when form has been submitted
  function handleSubmit(e) {
    e.preventDefault(); //makes it so the page doesn't reload before
    newItem.length !== 0 && onAdd(newItem); //add newItem to currentTodos if newItem isnt empty
    setNewItem(""); //sets newItem to empty string (the input with id = "item" becomes empty so that user can enter new item)
  }

  return (
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
  );
}
