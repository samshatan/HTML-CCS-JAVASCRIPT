import MovieList from "./MovieList";
import movieList from "../data/movie-list";
function MovieSection(props){
  const {name} = props.sectionDetailsList;
  const moviesToDisplay = movieList;
  return(
    <>
      <div class="text">
        <a href="">{name}</a>
        </div>
      <div class="image">
        <ul>
        {
          moviesToDisplay.map((movie,index) =>(
            <MovieList key ={index} movieDetailsList ={movie}/>
          ))
        }
        </ul>
      </div>
    </>
  )
}
export default MovieSection;