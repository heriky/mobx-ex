import React, {Component} from 'react' ;

import {observer} from 'mobx-react' ;

@observer
class Todo extends Component{
	constructor(props){
		super() ;
		this.__handleDbClick = this.__handleDbClick.bind(this) ;
	}

	__handleDbClick(e){
		var dom = e.target ; // 当前可操作的dom元素
		var oldValue = dom.innerHTML;

		// 产生可编辑输入框
		var input = document.createElement("input") ;
		input.value = oldValue ;
		var __self = this;
		debugger;
		input.onblur = function(){
			dom.innerHTML = this.value ? this.value : oldValue ;
			__self.onRevise(dom.id, dom.innerHTML, false) ;
		}
		dom.innerHTML = "" ;
		dom.appendChild(input);

		input.focus();
	}

	render(){
		const {todo, onToggle, onRemove, onFinish} = this.props ;
		this.onRevise = this.props.onRevise;
		return <li onClick = {onFinish} style={{"textDecoration": todo.isCompleted ? 'line-through': 'none'}}>
			<span onDoubleClick={this.__handleDbClick} id={todo.id}>{todo.title}</span>
			<button onClick={(e)=>{e.stopPropagation(); onRemove();}}>X</button>
		</li>
	}
}

export default Todo;