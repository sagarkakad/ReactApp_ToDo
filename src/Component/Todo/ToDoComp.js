import React, { useState } from "react";
import "./ToDoComp.css";

 function ToDoComp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Shows alert messages as required
  const showAlert = (message, type = "info") => {
    window.alert(message); // Simple native alert; replace with custom modal for advanced UI
  };

  // Handles adding a todo
  const addTodo = () => {
    if (todo.trim() === "") {
      showAlert("Please enter a task before adding!", "error");
    } else {
      setTodos([
        ...todos,
        { title: todo, completed: false }
      ]);
      showAlert("Task added successfully!", "success");
      setTodo("");
    }
  };

  // Handles marking as complete
  const toggleComplete = (idx) => {
    setTodos(
      todos.map((item, i) =>
        i === idx ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="todo-container">
      <h1 className="heading">To-Do Application</h1>
      <div className="input-row">
        <input
          type="text"
          placeholder="Add a task..."
          value={todo}
          onChange={e => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input"
        />
        <button onClick={addTodo} className="add-btn">Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((item, idx) => (
          <li
            key={idx}
            className={`todo-item ${item.completed ? "completed" : ""}`}
          >
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(idx)}
              />
              <span className="checkbox-custom" />
            </label>
            <span className="task-title">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoComp;