import React from 'react';
import '../App.css';
import TaskList from './TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import TaskForm from './TaskForm';
import Header from './Header';

// functional component
const App = () => {
	// create state -> insert task into the state (manually) -> render the tasks on the page

	// we need to wrap the entire app with the context provider
	return (
		<TaskListContextProvider>
			<div className="container">
				<div className="app-wrapper">
					<div className="main">
						<Header />
						<TaskForm />
						<TaskList />
					</div>
				</div>
			</div>
		</TaskListContextProvider>
	);
};

export default App;
