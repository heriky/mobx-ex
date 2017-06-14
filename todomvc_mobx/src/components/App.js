import React, {Component} from 'react' ;

import TodoList from './TodoList' ;
import AddTodo from './AddTodo' ;
import TodoStore from '../store/TodoStore' ;
import FilterLink from './FilterLink' ;

import {observer, Provider} from 'mobx-react' ;

var todoStore = new TodoStore() ;

const App = function(){
	return <Provider todoStore = {todoStore}>
		<div>
			<AddTodo/>
			<TodoList/>
			<FilterLink/>
		</div>
	</Provider>
}

export default App;