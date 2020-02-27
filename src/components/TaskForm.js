import React from 'react';

// this functional component will take care of the input fields, this will add the tasks
const TaskForm = () => {
	return (
		<form className="form">
			<input type="text" className="task-input" placeholder="Add Task.." required />
			<div className="buttons">
				<button type="submit" className="btn add-task-btn">
					Add Task
				</button>
				<button className="btn clear-btn">Clear</button>
			</div>
		</form>
	);
};

export default TaskForm;
