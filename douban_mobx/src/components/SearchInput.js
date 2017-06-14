import React,{PropTypes, Component} from 'react';
import {observer} from 'mobx-react' ;

@observer
class SearchInput extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render(){
    var input;
    return (
      <div className="search-input">
        <input type="text" className="search-text" ref={node=> input = node}/>
        <button
        onClick = {e=>this.props.store.fetchMovies(input.value)}
        className="search-btn" style={{position:'relative',overflow:"hidden"}} ref={(node)=>{this.button = node}}>
          搜索
        </button>
      </div>
    );
  }
}

export default SearchInput;
