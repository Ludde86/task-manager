import React, { useState, createContext } from 'react';
import { v1 as uuidv1 } from 'uuid';

// createContext allows us to create context
// useState allows us to create the state

// create the context, that we export
export const TaskListContext = createContext();

// create a component which will include the state (as a convention we use the name of the context followed by provider)
// this component will then renders the state, as a list (this list we will create in another component)
const TaskListContextProvider = (props) => {
	// useState accepts an argument which is the initial state
	// we set the initial state as an array with with three objects
	// useState returns an array with two values
	// -> the actual data (the array of these objecs)
	// -> the function which we use to edit or update the state (data)
	// in order to bring these values we have to use an array destructuring
	const [ tasks, setTasks ] = useState([
		{ title: 'Read the book', id: 1 },
		{ title: 'Wash the car', id: 2 },
		{ title: 'Write some code', id: 3 }
	]);

	// for the EDIT button
	// -> create a new state where we store the task we will edit
	const [ editItem, setEditItem ] = useState(null);

	// functions for the funcionality
	// each function needs to be passed in the provider, in order to share them in other components

	// this function will take a title as agument, and update the array (state)
	// to create a new task, we need to define its title and id,
	// -> add a newly created task to the current array (state)
	// we spread (copy) the current state, and add a new OBJECT with the title and the unique id (install uuid),
	// -> set this (new array) to the tasks array (state)
	const addTask = (title) => {
		setTasks([ ...tasks, { title, id: uuidv1() } ]);
	};

	// this function will take id as a parameter, and remove the task based on the id
	// -> update the current state, with an array helper method (filter)
	// this function returns a new array based on conditions -> item.id NOT equal to id
	// -> according to this condition, the filter method will keep the item in the array or it will FILTER the item out
	const removeTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	// this function will clear the entire list (set the current state as an empty array)
	const clearList = () => {
		setTasks([]);
	};

	// this function will find the item we will update
	// -> accepts the id parameter
	// -> to find the item we have to use an array helper method (find())
	// -> this helper function loops through the array and finds an item based on conditions
	// -> we have to compare the current item (id), and the actual id
	// once we find the needed item then we update this state, with the item we will edit
	const findItem = (id) => {
		const item = tasks.find((task) => task.id === id);
		setEditItem(item);
	};

	// then we need a function to handle the edit task
	// -> it will take TWO parameters (title and id)
	// during the update of the task, we dont need to update the id
	// -> so we use a map function, to replace the current array, with this new updated array (newTasks)
	// -> which we will pass the new edited task
	// -> conditions -> the id of the task is EQUAL to id
	// -> true, return a new object, with the new edited object (task)
	// -> false, return the current id of the task
	// to update the state, we update it with this new task
	const editTask = (title, id) => {
		const newTasks = tasks.map(
			(
				task // the current item
			) =>
				task.id === id // if the current id of the item, is the same is the new item (we want to edit)
					? { title, id } // we store this new item
					: task // else, we store the current (old) item
		);

		setTasks(newTasks); // and set, based on the condition, the item in the state
		setEditItem(null);
	};

	// here we provide our context (share this state with our react components)
	// this provider will share (this value) the state (tasks),
	// -> and wrap this provider, with the entire application (props.children -> needs as an argument in this component)
	// children refers to all the components, which will be wrapped by the contexts provider
	return (
		<TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editTask, editItem }}>
			{props.children}
		</TaskListContext.Provider>
	);
};

export default TaskListContextProvider;
