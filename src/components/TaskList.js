import React from 'react';


export default function TaskList({ tasks, removeTask }){
if (!tasks.length) return <p className="empty">No tasks yet </p>;


return (
<ul className="task-list">
{tasks.map(task => (
<li key={task.id} className="task-item">
<span>{task.text}</span>
<button className="btn small danger" onClick={() => removeTask(task.id)}>Delete</button>
</li>
))}
</ul>
);
}