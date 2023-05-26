import { TodoItem } from "./TodoItem";

//component containing the todo list
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return <TodoItem todo = {todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>;
      })}
    </ul>
  );
}
