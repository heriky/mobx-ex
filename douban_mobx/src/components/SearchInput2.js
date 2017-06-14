import React,{PropTypes, Component} from 'react';
import ripple from './RippleHoc';

class SearchInput extends Component{
  constructor(props){
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(e){
    this.props.rippleAnim(e, ()=>{
      console.log('ripple动画完成后执行回调。', this);
      // this.props.onClick(this.input.value);
      this.props.store.fetchMovies(this.input.value)
    })
  }

  render(){
    return (
      <div className="search-input">
        <input type="text" className="search-text" ref={node=> this.input=node}/>
        <button className="search-btn"
        onClick = {this.handleOnclick}>
          搜索
          {this.props.ripple}
        </button>
      </div>
    );
  }
}

SearchInput.PropTypes = {
  ripple: PropTypes.element,
  rippleAnim: PropTypes.func,
  onClick: PropTypes.func.isRequired
}

export default ripple({rippleColor: "red"})(SearchInput);
