import React,{PropTypes, Component} from 'react';
function ripple(config){
  return function(Compo){
    return class WrappedComponent extends Component{

      constructor(props){
        super(props) ;
        this.animating = false;
        this.rippleAnim = this.rippleAnim.bind(this);
      }

      componentDidMount(){
        this.parent = this.ripple.parent() ;
        this.parent.css({position: "relative", overflow: "hidden"})
      }

      rippleAnim(e, cb){
        const ripple = this.ripple;
        const parent = this.parent;

        if (this.animating) { return;}
        this.animating = true;

        const x = e.clientX - (parent.offset().left - $('body').scrollLeft());
        const y = e.clientY - (parent.offset().top - $('body').scrollTop());
        const len = Math.max(parent.width(), parent.height()) * 2.828;

        ripple.css({left: x, top: y});
        ripple.animate({width:`+=${len}px`, height:`+=${len}px`, opacity: 0}, config&&config.delay||500, ()=>{
          ripple.css({width: 0, height: 0, opacity: .7});
          this.animating = false;
          cb() // 动画完成后的回调
        })
      }

      render(){
        const ripple = (
          <i
            ref={node=> this.ripple= $(node)}
            style={{
              position: "absolute", width: 0, height:0,
              opacity: .7,background:config&&config.rippleColor || "#5DF1A0",
              borderRadius: '50%', transform:'translate(-50%, -50%)'
           }}>
          </i>) ;

        return (
          <Compo {...this.props} ripple={ripple} rippleAnim={this.rippleAnim}/>
        );
      }
    }
  }
}

export default ripple;

/*
1. 在需要添加ripple的元素内部添加{this.props.ripple}
2. 要激活ripple效果必须为元素注册onClick事件，通过this.props.rippleAnim(e, ()=>{})添加事件
3. export default ripple({rippleColor, delay})(Compo)
 */

