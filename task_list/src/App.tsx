import { useState } from 'react'
import './App.css'

fetch("http://localhost:3008/api/tasks/")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="title">
        <h1>New App</h1>
      </header>
      {/* Main area */}
      <div className="main-layout">
        {/* Sidebar */}
        <div className="menu-bar">
          <button>Home</button>
          <button>Tasks</button>
        </div>
        {/* Content */}
        <div className="task-list">
          <h2>Task List</h2>
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App