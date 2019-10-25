import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';


import LandingPage from '../screens/landing_page';
import Welcome from '../screens/welcome'
export default () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/welcome" component={Welcome} />
			</Switch>
		</Router>
	);
}