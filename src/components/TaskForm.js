import React, { useState } from 'react';


export default function TaskForm({ addTask }){
const [value, setValue] = useState('');


const submit = (e) => {
e.preventDefault();
addTask(value);
setValue('');
};


return (
<form onSubmit={submit} className="task-form">
<input
value={value}
onChange={e => setValue(e.target.value)}
placeholder="Enter a task"
className="input"
/>
<button className="btn" type="submit">Add</button>
</form>
);
}