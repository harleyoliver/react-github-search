import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';

const Root = function() {
	return(
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Main} />
				<Route path="/search/:searchUser" component={Main} />
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.querySelector('#root'));
