import React,{PropTypes, Component} from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router' ;

import App from './containers/App' ;

import './style.scss' ;
import routes from './routes' ;

// const App = function(){
// 	return <div>测试</div>
// }

var container = document.getElementById('react-app');
render(<Router routes={routes} history={browserHistory}/>, container) ;
