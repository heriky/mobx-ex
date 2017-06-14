import {observer} from 'mobx-react' ;

import React, {Component} from 'react' ;

import SearchInput2 from '../components/SearchInput2' ;
import SearchPage from './SearchPage' ;
import store from '../store/MovieStore' ;

class App extends Component{
	constructor(props){
		super();
	}

	render(){
		return <div>
			<SearchInput2 store={store}/>
			{this.props.children}
		</div>
	}
}

export default App ;