function MovieList(props){
  const {name, image, link} = props.movieDetailsList;
  console.log(name,image);
  return(
    <li><a href={link} target="_blank">

      <img src={image} alt={name}/>
      <div>
          {name}
      </div>
    </a></li>
  )
};
export default MovieList;