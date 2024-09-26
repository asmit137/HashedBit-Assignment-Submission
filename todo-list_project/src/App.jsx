import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const timestamp = new Date().toLocaleString(); // Get current date and time
    setTasks([...tasks, { id: Date.now(), text: newTask, time: timestamp }]);
    setNewTask("");
  };

  
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    setNewTask(task.text);
  };


  const handleUpdateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === currentTask.id ? { ...task, text: newTask } : task
      )
    );
    setIsEditing(false);
    setNewTask("");
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={isEditing ? handleUpdateTask : handleAddTask}>
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && <p>No tasks yet. Add one!</p>}
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text} (added on {task.time})</span>
            <div>
              <button onClick={() => handleEditTask(task)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
