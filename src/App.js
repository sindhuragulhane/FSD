import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
const [tasks, setTasks] = useState([]);


const addTask = (text) => {
if (!text || !text.trim()) return;
setTasks(prev => [...prev, { id: Date.now(), text: text.trim() }]);
};


const removeTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));




return (
<div className="app">
<div className="card">
<h2>Simple Task Manager</h2>
<p className="muted">Add tasks or delete them</p>
<TaskForm addTask={addTask} />
<TaskList tasks={tasks} removeTask={removeTask} />
</div>
</div>
);
}


export default App;
