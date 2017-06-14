import React,{PropTypes, Component} from 'react';
import {render} from 'react-dom';

const App = function(){
	return <div>测试</div>
}

var container = document.getElementById('react-app');
render(<App />, container) ;
