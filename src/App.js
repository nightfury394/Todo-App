import React, { useState } from 'react';
import './TodoApp.scss';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { text: newTask, id: Date.now() }]);
    setNewTask('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <input
              type="text"
              value={task.text}
              onChange={(e) => editTask(task.id, e.target.value)}
            />
            <button onClick={() => removeTask(task.id)}>X</button>
          </div>
        ))}
        <div className="task-form">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
