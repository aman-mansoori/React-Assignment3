import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks to display.</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
