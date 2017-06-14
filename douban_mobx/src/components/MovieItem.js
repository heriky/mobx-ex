import React,{PropTypes, Component} from 'react';
import { Link } from 'react-router';

const bgColors = ['red','green', 'blue', 'orange','#ABAB1E','#666'] ;
const bgObj = {} ;

function MovieItem({movie}){
	return(
		<li className="movie-item clearfix" id={movie.id}>
			<a href={movie.face}><img src={movie.face} alt={movie.title} className="movie-face"/></a>
			<div className="movie-info">
				<h3 className="movie-title">{movie.title}</h3>
				{movie.tags.map((tag, index)=>{
					var bg;
					if (!bgObj.hasOwnProperty(tag)) {
						bg = bgObj[tag] = (bgColors.length>0 && bgColors.pop())|| 'yellowgreen';
					}else{
						bg = bgObj[tag] ;
					}
					return <i className="movie-tag" key={index} style={{background: bg}}>{tag}</i>
				}
				)}
				<div className ="movie-director">导演:{movie.director}</div>
				<div><Link to={'/movie/'+movie.id} className="movie-load-detail" >详细情况</Link></div>
			</div>
		</li>
	)
}

MovieItem.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		face: PropTypes.string,
		tags: PropTypes.arrayOf(PropTypes.string),
		director: PropTypes.string
	}).isRequired,
}

export default MovieItem