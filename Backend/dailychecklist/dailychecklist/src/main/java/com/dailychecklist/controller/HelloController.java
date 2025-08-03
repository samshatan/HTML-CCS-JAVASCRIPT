package com.dailychecklist.controller;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

//   static class Message{
//     String message;

//     public Message(String message){
//       this.message = message;
//     }
//   }
  
  @GetMapping("/hello")
  public String hello(){
    return "Hello, World!";
  }
  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/movieSection")
  // public List<Todo> getTodos(){
  //   return List.of(
  //     new Todo(1, "Buy groceries", "Milk, Bread, Eggs", TodoStatus.Completed, "2023-10-01", TodoDifficulty.Easy, TodoPriority.P1),
  //     new Todo(2, "Complete project report", "Finish the final draft", TodoStatus.InProgress, "2023-10-05", TodoDifficulty.Medium, TodoPriority.P0),
  //     new Todo(3, "Book flight tickets", "For the upcoming vacation", TodoStatus.Blocker, "2023-10-10", TodoDifficulty.Hard, TodoPriority.P2),
  //     new Todo(4, "Call mom", "Check in on her health", TodoStatus.Completed, "2023-09-30", TodoDifficulty.Easy, TodoPriority.P1)
  //   );
  // }
  // public List<Movie> getMovies(){
  //   return List.of(
  //     new Movie("Interstellar", "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg", "https://en.wikipedia.org/wiki/Interstellar_(film)"),
  //     new Movie("Bhool Bhulaiyaa 3", "https://upload.wikimedia.org/wikipedia/en/e/e4/Bhool_Bhulaiyaa_3_poster.jpg", "https://en.wikipedia.org/wiki/Bhool_Bhulaiyaa_3"),
  //     new Movie("Poltergeist", "https://lumiere-a.akamaihd.net/v1/images/image_712c34b3.jpeg?region=0%2C0%2C800%2C1200", "https://en.wikipedia.org/wiki/Poltergeist_(1982_film)"),
  //     new Movie("The Conjuring 2", "https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_.jpg", "https://en.wikipedia.org/wiki/The_Conjuring_2"),
  //     new Movie("Titanic", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA", "https://en.wikipedia.org/wiki/Titanic_(1997_film)"),
  //     new Movie("Hera Pheri", "https://m.media-amazon.com/images/M/MV5BNDZmMGEwMjQtNjFlNi00ZGIxLTlkZjItNmU3Mzg4Y2E0ZjUzXkEyXkFqcGc@._V1_.jpg", "https://en.wikipedia.org/wiki/Hera_Pheri_(2000_film)"),
  //     new Movie("Squid Game", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGZUVAOqKSKi1Ah6hZ58eRkBDxciDAmfPA8rNrnF6xkD5iB440nBH8DoiReHc2FqalupOy", "https://en.wikipedia.org/wiki/Squid_Game"),
  //     new Movie("Oggy and The Cockroaches", "https://m.media-amazon.com/images/M/MV5BNzY3ZDVhMDMtOWQ1NS00NDc2LWI2OGQtY2YxOTdjMDMxZjJiXkEyXkFqcGc@._V1_.jpg", "https://en.wikipedia.org/wiki/Oggy_and_the_Cockroaches"),
  //     new Movie("Dragon Ball DAIMA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtC5P1iU_VvzHiSUJuVuQPzJKfFSLdgbMaI_XwryxmeaG3SCeZP1DKZCZZa8SkJw4LHA&usqp=CAU", "https://en.wikipedia.org/wiki/Dragon_Ball_Daima"),
  //     new Movie("The Martian", "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg?region=0%2C0%2C800%2C1200", "https://en.wikipedia.org/wiki/The_Martian_(film)"),
  //     new Movie("October", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgTGEG6zANFqCGP-vczfejJdc3XTeWRkSLclr7usr098u1vFd3HBZjtVm4oQSjKC4Zm-l9", "https://en.wikipedia.org/wiki/October_(2018_film)"),
  //     new Movie("Night Has Come", "https://static.seriesreminder.com/tvdb/sr_posters/night-has-come/65647c8d12e47.jpg", "https://en.wikipedia.org/wiki/Night_Has_Come"),
  //     new Movie("Beauty And The Beast", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2YFqiVsUBFis1CLEDAqC5h-UyE23N61-AAMo7LJmMC8KhF_rV-WEv_Jxb1NJjNydURzA6", "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(2017_film)"),
  //     new Movie("Shinchan", "https://i.pinimg.com/736x/ea/de/93/eade9341cd3284a06c24487f2bd332b4.jpg", "https://en.wikipedia.org/wiki/Crayon_Shin-chan"),
  //     new Movie("Stree 2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DiL7I-eBgSzcPcdaxezuaBLyRkk_kowa3sXv6I5DBLHk799OWxLR1tgRzNvyADFmRMg&usqp=CAU", "https://en.wikipedia.org/wiki/Stree_2")
  //   );
  // }

  public List<Section> getSection(){
    return List.of(
      new Section("All"),
      new Section("Latest"),
      new Section("Popular"),
      new Section("Horror"),
      new Section("Sci-fi"),
      new Section("Romantic"),
      new Section("Comedy"),
      new Section("K-Drama"),
      new Section("C-Drama"),
      new Section("Anime"),
      new Section("Cartoon")
    );
  }
}
