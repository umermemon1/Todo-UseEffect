import "./App.css";
import Navbar from "./components/Navbar.jsx";
import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const create_todo = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }

    if (editId !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.createdAt === editId
          ? {
              ...todo,
              title,
              description,
            }
          : todo,
      );

      setTodos(updatedTodos);
      setEditId(null);
    } else {
      const newTodo = {
        title,
        description,
        createdAt: new Date().getTime(),
      };

      setTodos([newTodo, ...todos]);
    }

    setTitle("");
    setDescription("");
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.createdAt !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (todo) => {
    setTitle(todo.title);
    setDescription(todo.description);
    setEditId(todo.createdAt);
  };

  return (
    <div className="main">
      <Navbar totalTodos={todos.length} editing={editId !== null} />
      <h1>Todo App Reactjs</h1>

      <form onSubmit={create_todo}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter text..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">
          {editId !== null ? "Update Todo" : "Submit"}
        </button>
      </form>

      <div className="result">
        {todos.map((singleTodo) => {
          return (
            <div key={singleTodo.createdAt} className="post">
              <h2>{singleTodo.title}</h2>
              <p>{singleTodo.description}</p>

              <div className="buttonContainer">
                <button onClick={() => deleteTodo(singleTodo.createdAt)}>
                  Delete
                </button>

                <button onClick={() => editTodo(singleTodo)}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
