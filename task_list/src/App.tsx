import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css'


function Home() {
  return <h2>Welcome Home!</h2>;
}

function Tasks() {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3008/api/tasks/")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text} {"    "}
              {task.completed ? 
                <span className="check">✓</span> : 
                <span className="cross">✗</span>
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Header */}
        <header className="title">
          <h1>Organizer</h1>
        </header>

        {/* Main area */}
        <div className="main-layout">
          {/* Sidebar */}
          <div className="menu-bar">
            <Link to="/"><button>Home</button></Link>
            <Link to="/tasks"><button>Tasks</button></Link>
          </div>

          {/* Content */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App