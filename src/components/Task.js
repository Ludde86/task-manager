import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

// this functional component will renders each task from the state (tasks array)
// each task will contain the title of the task,
// -> and two buttons
const Task = ({ task }) => {
	// bring in the the functions from the context that we want to use in this component

	// we will call the removeTask in an onClick event on the remove button
	// -> (this function needs an id as an argument)
	const { removeTask, findItem } = useContext(TaskListContext);

	// when we click the edit button we have to grap the current item (title)
	// -> put it in the input field (so we can edit it there)
	// -> change the value of the button, from add to edit
	// -> once we change the content of a task, and click the edit button then it should be updated

	return (
		<li className="list-item">
			<span>{task.title}</span>
			<div>
				<button
					className="btn-delete task-btn"
					onClick={() => removeTask(task.id)} // this onClick event will pass the id as an argument
				>
					<i className="fas fa-trash-alt" />
				</button>
				<button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
					<i className="fas fa-pen" />
				</button>
			</div>
		</li>
	);
};

export default Task;
