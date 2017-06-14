import {observable, autorun} from 'mobx' ;

// domain 实体类, 对应redux中initialState制定结构

class Todo {
	@observable title = "";
	@observable isCompleted = false;
	constructor(title, isCompleted){
		this.id = Math.random() ;
		this.title = title;
		this.isCompleted = isCompleted ;
	}
}


// 对应redux中reducer处理方法
class TodoStore{

	@observable filter ="all" ; // primitive type原始类型受监听
	@observable todos = [] ;

	constructor(){
		this.todosBackup = [] ;
	}

	/** 关于todo的操作**/
	toggleTodo(id){
		var pos = this.findTodoById(id);
		this.todos[pos].isCompleted = !this.todos[pos].isCompleted;

		this.todosBackup = this.todos.slice() ;
	}

	addTodo(title, isCompleted=false){
		this.todos.push(new Todo(title, isCompleted)) ;

		this.todosBackup = this.todos.slice() ;
	}

	deleteTodo(id){
		var pos = this.findTodoById(id);
		this.todos.splice(pos, 1);

		this.todosBackup = this.todos.slice() ;
	}

	updateTodo(id, title, isCompleted){
		var pos = this.findTodoById(id);
		Object.assign(this.todos[pos], {title, isCompleted}); // 改变是否生效？？

		this.todosBackup = this.todos.slice() ;
	}

	filterTodo(label){
		return this.todos.filter((todo, index)=>{
			return todo.isCompleted == label;
		})
	}

	findTodoById(id){
		var pos = -1;
		this.todos.forEach((todo, index)=>{ //寻找相同id值的todo位置
			if (todo.id === id) {
				pos = index;
				return;
			}
		});
		return pos;
	}

	findTodoByTitle(title){
		var rs = null ;
		this.todos.forEach((todo, index)=>{
			if (todo.title === title) {
				rs = todo ;
				return;
			}
		});
		return rs;
	}


	/** 关于filter的操作 */
	displayByFilter(filter){
		this.filter = filter; // 变换当前过滤条件
		switch(filter){
			case "all":
				this.todos = this.todosBackup ;
				return this.todos;

			case "completed":
				this.todos = this.todosBackup.filter((todo, index)=>todo.isCompleted)
				return this.todos;

			case "uncompleted":
				this.todos = this.todosBackup.filter((todo, index)=>!todo.isCompleted)
				return this.todos;

			default:
				return this.todos;
		}
	}
}

export default TodoStore ;