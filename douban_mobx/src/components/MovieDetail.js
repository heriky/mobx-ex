
function MovieDetail({movie, params}){
  return (
    <div>
      <h3 className="movie-detail-title">"{movie.title}"的详情:</h3>
      <img src={movie.face} alt="封面" className="movie-detail-face"/>
    </div>
  )
}