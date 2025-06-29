import MovieSection from './MovieSection.jsx';
import sectionDetails from '../data/section-details';
// import { useEffect, useState } from 'react';
function MovieCategory(){

  // const [sectionDetails, SetSectionDetails] = useState([]);

  // async function fetchData(){
  //   const response = await fetch("http://localhost:8080/movieSection");
  //   const data = await response.json();
  //   SetSectionDetails(data);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[]);

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