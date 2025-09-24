/* MenuBar.tsx */

import { Link } from "react-router-dom";
import './MenuBar.css';

export default function MenuBar() {
  return (
    <div className="menu-bar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/tasks"><button>Tasks</button></Link>
    </div>
  );
}
