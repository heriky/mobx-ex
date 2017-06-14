import React,{Component} from 'react' ;
import ReactDOM from 'react-dom' ;

import App from './components/App';

var container = document.createElement("div");
container.id = 'react-app';
document.body.appendChild(container);

ReactDOM.render(<App />, container)