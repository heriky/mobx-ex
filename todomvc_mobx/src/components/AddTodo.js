import React, {Component} from 'react' ;

import {observer, inject} from 'mobx-react' ;

@inject('todoStore')
@observer
class AddTodo extends Component{
	constructor(){
		super();
		this.__handleClick = this.__handleClick.bind(this);
	}

	__handleClick(){
		var value = this.input.value;
		if (value== null || value.trim()=="") { return }
		this.props.todoStore.addTodo(value);
		this.input.value = "";
	}

	render(){
		var todoStore = this.props.todoStore;
		return <div>
			<input type="text" ref={node=>{this.input = node}}/>
			<button onClick={this.__handleClick}> Add</button>
		</div>
	}
}

export default AddTodo ;