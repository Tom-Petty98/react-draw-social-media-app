import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShareDrawing from './draw/ShareDrawing'
import DrawPage from './draw/DrawPage.js'
import SharedDrawings from './share/SharedDrawings';


function App() {
return (
  <Router>
		<div>
	  	<Switch>
			<Route path="/posts">
				<SharedDrawings />
			</Route>
			<Route path="/draw">
		  	<DrawPage />
			</Route>
			<Route path="/share">
				<ShareDrawing />
			</Route>
	 	 </Switch>
		</div>
	</Router>
);
}

export default App
