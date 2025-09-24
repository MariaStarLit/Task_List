/* App.tsx */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />

        <div className="main-layout">
          <MenuBar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
