import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

fetch("http://localhost:3008/api/tasks/")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

function Home() {
  return <h2>Welcome Home!</h2>;
}

function Tasks() {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Header */}
        <header className="title">
          <h1>New App</h1>
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