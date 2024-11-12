import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Sample Task 1', completed: false },
        { id: 2, text: 'Sample Task 2', completed: false }
      ]
    };
  }

  addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  toggleTaskCompletion = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    });
  };

  deleteTask = (taskId) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== taskId) });
  };

  render() {
    return (
      <div>
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
