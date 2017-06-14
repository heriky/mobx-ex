import React, {Component} from 'react' ;

import {observer} from 'mobx-react' ;

const Link = observer(({active, children, onClick})=>{
	// if (active) {
	// 	return <span>{children}</span>
	// }
	// return <a href="#" onClick = {(e)=>{e.preventDefault(); onClick()}}> {children} </a>
	// return {active ? children :
	// 	<a href="#" onClick = {(e)=>{e.preventDefault(); onClick()}}> {children} </a>
	// }
	return <span>
	{active==true ? children: <a href="#" onClick = {(e)=>{e.preventDefault(); onClick()}}> {children} </a>
	}</span>
})

export default Link;