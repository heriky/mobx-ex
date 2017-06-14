import React, {Component} from 'react' ;

import {observer, inject} from 'mobx-react' ;

import Link from './Link' ;

@inject('todoStore')
@observer
class FilterLink extends Component{
	constructor(props){
		super();
	}

	render(){
		var todoStore = this.props.todoStore ;
		console.log("当前filter为:"+ todoStore.filter)
		return <div>
			<Link onClick = {()=>{todoStore.displayByFilter("all")}} active = {todoStore.filter == "all"}>全部</Link>
			<Link onClick = {()=>{todoStore.displayByFilter("completed")}} active = {todoStore.filter == "completed"}>已完成</Link>
			<Link onClick = {()=>{todoStore.displayByFilter("uncompleted")}} active = {todoStore.filter == "uncompleted"}>未完成</Link>
		</div>
	}
}

export default FilterLink ;