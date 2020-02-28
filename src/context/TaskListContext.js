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

	// here we provide our context (share this state with our react components)
	// this provider will share (this value) the state (tasks),
	// -> and wrap this provider, with the entire application (props.children -> needs as an argument in this component)
	// children refers to all the components, which will be wrapped by the contexts provider
	return <TaskListContext.Provider value={{ tasks, addTask }}>{props.children}</TaskListContext.Provider>;
};

export default TaskListContextProvider;
