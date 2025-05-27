function MovieListComponents(props){
  const {name, image, link} = props.movieLists;
  return(
    <li><a href={link} target="_blank">

      <img src={image} alt={name}/>
      <div>
          {name}
      </div>
    </a></li>
  )
};
export default MovieListComponents;