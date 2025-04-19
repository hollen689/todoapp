import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      const now = new Date().toLocaleString();
      setTasks([...tasks, { text: input, done: false, time: now }]);
      setInput('');
    }
  };

  const handleToggle = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      {/* Top section centered */}
      <div className="app">
        <h1>📝 To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>

      {/* Left-aligned task list */}
      <div className="left-task-list">
        <ul>
        {tasks.map((task, index) => (
            <li key={index} className={task.done ? 'done' : ''}>
              <div className="task-content">
                <span className="task-text">{task.text}</span>
                <span className="task-time">{task.time}</span>
              </div>
              <div className="task-buttons">
                <button onClick={() => handleToggle(index)}>
                  {task.done ? '✅' : '✔'}
                </button>
                <button onClick={() => handleDelete(index)}>❌</button>
              </div>
            </li>
          ))}

        </ul>
      </div>
    </>
  );
}

export default App;