import MovieSection from './MovieSection.jsx';
import sectionDetails from '../data/section-details';
function MovieCategory(){

  return (
    <div id="movielist">
      <section>
        <div className="moviestable">
          {
            sectionDetails.map((movieSection,index)=>(
              <MovieSection key={index} sectionDetailsList = {movieSection}/>
            ))}
        </div>
      </section>
    </div>
  )
}
export default MovieCategory;