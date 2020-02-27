import React, { useState, createContext } from 'react';

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

	// here we provide our context (share this state with our react components)
	// this provider will share (this value) the state (tasks),
	// -> and wrap this provider, with the entire application (props.children -> needs as an argument in this component)
	// children refers to all the components, which will be wrapped by the contexts provider
	return <TaskListContext.Provider value={{ tasks }}>{props.children}</TaskListContext.Provider>;
};

export default TaskListContextProvider;
