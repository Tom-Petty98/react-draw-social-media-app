import React from 'react'
import { Router, Switch } from 'react-router-dom'
import DrawPage from '/draw/DrawPage.js'

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/draw">
						<DrawPage />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
