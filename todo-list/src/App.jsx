//App component -- component that main.js can render to create the UI
import { useState } from "react"
import './styles.css'

export default function App() {
  const [newItem, setNewItem] = useState("") //useState takes in initial value (in this case an empty string) for input text box
  const [todos, setTodos] = useState([]); //gets the todos so far as an array

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos => {
      return [
        ...currentTodos, { id: crypto.getRandomUUID() }
      ]
    }));

  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
        </div>
        <button className="btn">Add!</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}