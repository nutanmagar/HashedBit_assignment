import { useState, useRef } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // Add Task
  const addTask = () => {
    const trimmedTask = task.trim();

    if (trimmedTask === "") {
      setError("Task cannot be empty");
      return;
    }

    if (tasks.includes(trimmedTask)) {
      setError("Task already exists");
      return;
    }

    const updatedTasks = [...tasks, trimmedTask].sort((a, b) =>
      a.localeCompare(b)
    );

    setTasks(updatedTasks);
    setTask("");
    setError("");
    inputRef.current.focus();
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Clear All Tasks
  const clearAll = () => {
    setTasks([]);
  };

  // Enter key support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      <h2>Todo List</h2>

      <input
        type="text"
        ref={inputRef}
        value={task}
        placeholder="Enter task"
        onChange={(e) => {
          setTask(e.target.value);
          setError("");
        }}
        onKeyDown={handleKeyDown}
      />

      <button onClick={addTask} disabled={!task.trim()}>
        Add
      </button>

      {error && <p>{error}</p>}

      <p>Total Tasks: {tasks.length}</p>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button onClick={clearAll}>Clear All</button>
      )}
    </div>
  );
}

export default App;