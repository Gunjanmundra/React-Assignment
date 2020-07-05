import React from 'react';
import './App.css';
import SignIn from './Auth/SignIn/SignIn';
import Menu from './Menu/Menu';
import { Route, Switch } from 'react-router-dom';
import Parent from './Menu/Parent';

function App() {
	return (
		<div className='App'>
			{/* <Switch>
				<Route path='/menu' component={Menu} /> <Route path='/' component={SignIn} />
			</Switch> */}
      <Parent />
		</div>
	);
}

export default App;
