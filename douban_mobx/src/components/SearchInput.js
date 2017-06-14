import React,{PropTypes, Component} from 'react';

class SearchInput extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render(){
    return (
      <div className="search-input">
        <input type="text" className="search-text"/>
        <button
        onClick = {e=>this.props.onClick()}
        className="search-btn" style={{position:'relative',overflow:"hidden"}} ref={(node)=>{this.button = node}}>
          搜索
        </button>
      </div>
    );
  }
}

export default SearchInput;
