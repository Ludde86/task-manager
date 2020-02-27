import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

// useContext allows us to bring (return) in the current context value
// to use that context we must import that context itself

// this functional component will render the state (data) as a list (the array created in TaskListContext),
// -> for that we will use the useContext
const TaskList = () => {
	// we can use destructuring and get access to the tasks from the state
	const { tasks } = useContext(TaskListContext);

	// in order to render list on the page we have to loop (map) through the array
	// -> we will use javascript {} to return all items within this array
	// we will create a new component for each task (this component is the whole list of tasks)
	return (
		<div>
			<ul className="list">
				{tasks.map((task) => {
					return <Task />;
				})}
			</ul>
		</div>
	);
};

export default TaskList;
