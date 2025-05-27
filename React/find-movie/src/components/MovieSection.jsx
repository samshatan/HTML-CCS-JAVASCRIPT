import MovieList from "./MovieList";
function MovieSection(props){
  const {name} = props.sectionDetailsList;
  return(
    <>
      <div class="text">
        <a href="">{name}</a>
        </div>
      <div class="image">
        <ul>
        {/* {
          name==="All"? <MovieList title= {name}/>: null
        }
        {
          name==="Latest"? <MovieList title= {name}/>: null
        }
        {
          name==="Popular"? <MovieList title= {name}/>: null
        }
        {
          name==="Horror"? <MovieList title= {name}/>: null
        }
        {
          name==="Sci-fi"? <MovieList title= {name}/>: null
        }
        {
          name==="Romantic"? <MovieList title= {name}/>: null
        }
        {
          name==="Comedy"? <MovieList title= {name}/>: null
        }
        {
          name==="Popular"? <MovieList title= {name}/>: null
        }
        {
          name==="K-Drama"? <MovieList title= {name}/>: null
        }
        {
          name==="C-Drama"? <MovieList title= {name}/>: null
        }
        {
          name==="Anime"? <MovieList title= {name}/>: null
        }
        {
          name==="Cartoon"? <MovieList title= {name}/>: null
        } */}
        <MovieList title= {name}/>
        </ul>
      </div>
    </>
  )
}
export default MovieSection;