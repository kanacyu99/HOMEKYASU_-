import React, { useState, useEffect } from 'react';
import { praiseWords } from './tasks';

const TaskItem = ({ task, onToggleComplete }) => {
  const [showPraise, setShowPraise] = useState(false);
  const [currentPraise, setCurrentPraise] = useState('');

  const handleCheckboxChange = () => {
    onToggleComplete(task.id);
    if (!task.completed) {
      const randomIndex = Math.floor(Math.random() * praiseWords.length);
      setCurrentPraise(praiseWords[randomIndex]);
      setShowPraise(true);
    }
  };

  useEffect(() => {
    let timer;
    if (showPraise) {
      timer = setTimeout(() => {
        setShowPraise(false);
      }, 2000); // 2秒後に吹き出しを消す
    }
    return () => clearTimeout(timer);
  }, [showPraise]);

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="praise-popup">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
          id={`task-${task.id}`}
        />
        <label htmlFor={`task-${task.id}`}>{task.text}</label>
        {showPraise && !task.completed && (
          <span className="popup-message show">{currentPraise}</span>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
