import React, {Component} from 'react' ;

import Todo from './Todo' ;

import {observer, inject} from 'mobx-react' ;


@inject("todoStore")
@observer
class TodoList extends Component{

	constructor(props){
		super();
	}

	render(){
		// 接收TodoStore
		var todoStore = this.props.todoStore ;
		return <ul>
			{todoStore.todos.map((todo, index)=>{
				return <Todo key={todo.id} todo={todo}
					onToggle={todoStore.toggleTodo}
					onRemove = {()=>{todoStore.deleteTodo(todo.id)}}
					onRevise = {todoStore.updateTodo}
					onFinish = {()=>{todoStore.updateTodo(todo.id, todo.title, !todo.isCompleted)}}
				/>
			})}
		</ul>
	}
}

export default TodoList ;