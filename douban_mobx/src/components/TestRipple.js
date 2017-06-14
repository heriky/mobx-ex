import React,{PropTypes, Component} from 'react';
import ripple from './RippleHoc';

class TestRipple extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.rippleAnim(e, ()=>{
      console.log('发生点击事件')
    })
  }

  render(){
    return (
    <div style={{width: 300, height: 300, background: 'green', color: "white", marginTop: 600}}
    onClick = {this.handleClick}
    >
      内容
      {this.props.ripple}
    </div>
    );
  }
}

export default ripple({rippleColor: "red"})(TestRipple);