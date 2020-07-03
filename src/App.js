import React from 'react';
import './App.css';
import SignIn from './Auth/SignIn/SignIn';
import Menu from './Menu/Menu';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/menu' component={Menu} /> <Route path='/' component={SignIn} />
			</Switch>
		</div>
	);
}

export default App;
