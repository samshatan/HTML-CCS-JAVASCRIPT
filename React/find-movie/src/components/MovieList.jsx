import MovieListComponents from "./MovieListComponents";
import movieListAll, {movieListCDramaSeries, movieListcomedyMovies, movieListhorrorMovies, movieListkDramaSeries, movieListLatest, movieListPopular, movieListromanceMovies, movieListsciFiMovies, movieListAnime, movieListCartoon} from "../data/movie-list";

function MovieList(props){
  let moviesTo = null;
  if(props.title === "All"){
    moviesTo = movieListAll;
  }
  else if(props.title === "Popular"){
    moviesTo = movieListPopular;
  }
  else if(props.title === "Latest"){
    moviesTo = movieListLatest;
  }
  else if(props.title === "Horror"){
    moviesTo = movieListhorrorMovies;
  }
  else if(props.title === "Sci-fi"){
    moviesTo = movieListsciFiMovies;
  }
  else if(props.title === "Romantic"){
    moviesTo = movieListromanceMovies
  }
  else if(props.title === "Comedy"){
    moviesTo = movieListcomedyMovies;
  }
  else if(props.title === "K-Drama"){
    moviesTo = movieListkDramaSeries;
  }
  else if(props.title === "C-Drama"){
    moviesTo = movieListCDramaSeries;
  }
  else if(props.title === "Anime"){
    moviesTo = movieListAnime;
  }
  else{
    moviesTo = movieListCartoon;
  }
  return(
    <>
      {
        moviesTo.map((movie,index) =>(
          <MovieListComponents key ={index} movieLists ={movie}/>
        ))
      }
    </>
  )
};

export default MovieList;