import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContext';

// this functional component will take care of the input fields, this will add the tasks
const TaskForm = () => {
	// bring in the context, and destructuring to  and get access to the function we want to use here
	const { addTask } = useContext(TaskListContext);

	// create the state, in which we store the current value (title) of the task
	const [ title, setTitle ] = useState('');

	// this function will grab the value from the input field,
	// -> will take an event as an argue
	// grab the value from the input fields, and store it in the title
	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	// add the task to the list
	// -> when submittin we call the addTask function and pass the title (state)
	// -> we need to clean the input field
	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the default action (reload the page) of submit button
		addTask(title);
		setTitle('');
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				type="text"
				value={title} // here we define the value for the input ("connect" this input with the state )
				className="task-input"
				placeholder="Att Göra.."
				onChange={handleChange}
				required
			/>
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
