import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import initialTasks from './tasks';

const TASKS_STORAGE_KEY = 'homecast_tasks';

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} />
    </div>
  );
};

export default Tasks;
