import React, { useState, createContext } from 'react';

// createContext allows us to create context
// useState allows us to create the state

// create the context, that we export
export const TaskListContext = createContext();

// create a component which will include the state (as a convention we use the name of the context followed by provider)
const TaskListContextProvider = () => {
	// useState accepts an argument which is the initial state
	// we set the initial state as an array with with three objects
	useState([ { task: 'Read the book', id: 1 }, { task: 'Wash the car', id: 2 }, { task: 'Write some code', id: 3 } ]);

	return <div>Task List Context</div>;
};

export default TaskListContextProvider;
