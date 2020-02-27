import React from 'react';

// this functional component will renders each task from the state (tasks array)
// each task will contain the title of the task,
// -> and two buttons
const Task = () => {
	return (
		<li className="list-item">
			<span>Task Title</span>
			<button className="btn-delete task-btn">
				<i className="fas fa-trash-alt" />
			</button>
			<button className="btn-edit task-btn">
				<i className="fas fa-pen" />
			</button>
		</li>
	);
};

export default Task;
