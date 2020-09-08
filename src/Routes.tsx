import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main, Auth } from './pages'

const Routes = () => {
	return (
		<Switch>
			<Route path="/auth" component={Auth} />
			<Route exact path="/" component={Main} />
		</Switch>
	)
}

export default Routes
