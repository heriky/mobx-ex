import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';

import App from './containers/App' ;
import SearchPage from './containers/SearchPage' ;
import SearchDetail from  './containers/SearchDetail' ;

export default (
	<Route path='/' component= {App}>
		<IndexRoute component={SearchPage}/>
		<Route path='movie/:id' component={SearchDetail}/>
	</Route>
)