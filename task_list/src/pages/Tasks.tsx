/* Tasks.tsx */

import { useEffect, useState } from "react";
import './Tasks.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
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
              {task.text}{" "}
              {task.completed ? (
                <span className="check">✓</span>
              ) : (
                <span className="cross">✗</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
