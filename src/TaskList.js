import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
