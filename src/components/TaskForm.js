import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

// this functional component will take care of the input fields, this will add the tasks
const TaskForm = () => {
	// bring in the context, and destructuring to  and get access to the function we want to use here
	const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

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
		if (!editItem) {
			// if there is none editItem
			addTask(title); // then we add a new task
			setTitle('');
		} else {
			// if there is an editItem, we pass it's current id with the new title
			editTask(title, editItem.id);
		}
	};

	// we have to look at how to editItem value is changing
	// -> for this we gonna use the useEffect function (the old component did mount)
	// -> it rerenders the component once this state is updated
	// -> we have to check if editItem is equal to null or NOT
	// -> NOT null, we have to change the value of the title, and set as the title od editItem
	// -> if NULL, set the title as an empty string
	useEffect(
		() => {
			if (editItem) {
				// -> editing the item
				setTitle(editItem.title);
			} else {
				setTitle('');
			}
		},
		[ editItem ]
	);
	// then we need to run this hook ONLY when the value of editItem updates
	// -> to do that, we need to pass, as a second argument, the state
	// to edit a task (not only add a new one), we need to run editTask once the form is submitted
	// -> this we do in the handleSubmit, with some conditions

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
					{editItem ? 'Ändra' : 'Lägg till'}
				</button>
				<button
					className="btn clear-btn"
					onClick={clearList} // this function sets the array state as empty
				>
					Rensa
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
