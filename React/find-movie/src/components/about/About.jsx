import Header from "../Header";

function About(){
  return(
    <>
      <Header/>
      <div class="about">
        <h2>About Us</h2><br/>
        <p>Welcome to Find Movies, your go-to platform for discovering the best movies tailored to your taste. Our mission is to help you find films that you'll love, whether you're in the mood for a classic, a blockbuster, or an indie gem.</p>
        <p>We believe that every movie has a story to tell, and we are here to guide you through the vast world of cinema. Our team of movie enthusiasts curates lists, reviews, and recommendations to ensure you never run out of options.</p>
        <p>Join us on this cinematic journey and explore the magic of movies!</p>
      </div>
      <div class="team">
            <h2>Meet Our Team</h2>
            <div class="team-member">
                <h3>Sana</h3>
                <p>Email Id: <a href="mailto:sanasaifi1420@gmail.com">sanasaifi1420@gmail.com</a></p>
                <p>Phone No.: <a href="tel:+917351516425">+917351516425</a></p>                
            </div>
            <br/>
            <div class="team-member">
                <h3>Sameer Maurya</h3>
                <p>Email Id: <a href="mailto:sameermaurya97044@gmail.com">sameermaurya97044@gmail.com</a></p>
                <p>Phone No.: <a href="tel:+917903516362">+917903516362</a></p>
            </div>
        </div>
    </>
  )
}
export default About;