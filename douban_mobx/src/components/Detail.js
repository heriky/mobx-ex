import React,{PropTypes, Component} from 'react';

function Detail({movie}){
	return (
		<div className="movie-detial">
			<div className="movie-detail-name">{movie.title}<span className="movie-detial-score">{movie.rating}</span></div>
			<div className="movie-detail-type">
			{movie.tags.map((type,index)=><span key={index}>{type}</span>)}
			</div>
			<div className="movie-detial-face">
				<img src={movie.face} alt=""/>
			</div>
			<div className="movie-detial-desc">简介</div>
		</div>
	)
}

export default Detail;