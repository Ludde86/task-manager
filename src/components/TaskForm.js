import React from 'react';

// this functional component will take care of the input fields, this will add the tasks
const TaskForm = () => {
	return (
		<form className="form">
			<input type="text" className="task-input" placeholder="Att Göra.." required />
			<div className="buttons">
				<button type="submit" className="btn add-task-btn">
					Lägg till
				</button>
				<button className="btn clear-btn">Rensa</button>
			</div>
		</form>
	);
};

export default TaskForm;
