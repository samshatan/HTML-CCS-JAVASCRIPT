const movieListAll = [
  {
    name: "Interstellar",
    image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Interstellar_(film)"
  },
  {
    name: "Bhool Bhulaiyaa 3",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Bhool_Bhulaiyaa_3_poster.jpg",
    link: "https://en.wikipedia.org/wiki/Bhool_Bhulaiyaa_3"
  },
  {
    name: "Poltergeist",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_712c34b3.jpeg?region=0%2C0%2C800%2C1200",
    link: "https://en.wikipedia.org/wiki/Poltergeist_(1982_film)"
  },
  {
    name: "The Conjuring 2",
    image: "https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/The_Conjuring_2"
  },
  {
    name: "Titanic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA",
    link: "https://en.wikipedia.org/wiki/Titanic_(1997_film)"
  },
  {
    name: "Hera Pheri",
    image: "https://m.media-amazon.com/images/M/MV5BNDZmMGEwMjQtNjFlNi00ZGIxLTlkZjItNmU3Mzg4Y2E0ZjUzXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Hera_Pheri_(2000_film)"
  },
  {
    name: "Squid Game",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGZUVAOqKSKi1Ah6hZ58eRkBDxciDAmfPA8rNrnF6xkD5iB440nBH8DoiReHc2FqalupOy",
    link: "https://en.wikipedia.org/wiki/Squid_Game"
  },
  {
    name: "Oggy and The Cockroaches",
    image: "https://m.media-amazon.com/images/M/MV5BNzY3ZDVhMDMtOWQ1NS00NDc2LWI2OGQtY2YxOTdjMDMxZjJiXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Oggy_and_the_Cockroaches"
  },
  {
    name: "Dragon Ball DAIMA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtC5P1iU_VvzHiSUJuVuQPzJKfFSLdgbMaI_XwryxmeaG3SCeZP1DKZCZZa8SkJw4LHA&usqp=CAU",
    link: "https://en.wikipedia.org/wiki/Dragon_Ball_Daima"
  },
  {
    name: "The Martian",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg?region=0%2C0%2C800%2C1200",
    link: "https://en.wikipedia.org/wiki/The_Martian_(film)"
  },
  {
    name: "October",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgTGEG6zANFqCGP-vczfejJdc3XTeWRkSLclr7usr098u1vFd3HBZjtVm4oQSjKC4Zm-l9",
    link: "https://en.wikipedia.org/wiki/October_(2018_film)"
  },
  {
    name: "Night Has Come",
    image: "https://static.seriesreminder.com/tvdb/sr_posters/night-has-come/65647c8d12e47.jpg",
    link: "https://en.wikipedia.org/wiki/Night_Has_Come"
  },
  {
    name: "Beauty And The Beast",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2YFqiVsUBFis1CLEDAqC5h-UyE23N61-AAMo7LJmMC8KhF_rV-WEv_Jxb1NJjNydURzA6",
    link: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(2017_film)"
  },
  {
    name: "Shinchan",
    image: "https://i.pinimg.com/736x/ea/de/93/eade9341cd3284a06c24487f2bd332b4.jpg",
    link: "https://en.wikipedia.org/wiki/Crayon_Shin-chan"
  },
  {
    name: "Stree 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DiL7I-eBgSzcPcdaxezuaBLyRkk_kowa3sXv6I5DBLHk799OWxLR1tgRzNvyADFmRMg&usqp=CAU",
    link: "https://en.wikipedia.org/wiki/Stree_2"
  }
];

const movieListLatest = [
  {
    name: "Mufasa:The Lion King",
    image: "https://assetscdn1.paytm.com/images/cinema/mufasa--cfe21fa0-a30d-11ef-b945-57c02e367648.jpg?format=webp&imwidth=300",
    link: "https://en.wikipedia.org/wiki/Mufasa:_The_Lion_King"
  },
  {
    name: "Do Patti",
    image: "https://assets.gadgets360cdn.com/pricee/assets/product/202410/do_patti2_1729682924.jpg",
    link: "https://en.wikipedia.org/wiki/Do_Patti"
  },
  {
    name: "Bloody Beggar",
    image: "https://m.media-amazon.com/images/M/MV5BMWQzYjU1NjAtOGMyYy00YjRlLTk1YzgtZTQ4YjFlMmViYWI1XkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Bloody_Beggar"
  },
  {
    name: "Devara: Part 1",
    image: "https://media.gv.com.sg/imagesresize/img4165.jpg",
    link: "https://en.wikipedia.org/wiki/Devara:_Part_1"
  },
  {
    name: "White Bird",
    image: "https://m.media-amazon.com/images/M/MV5BMGU0OGMzZWYtMDdjZC00OGI2LWFkOWMtNzQyOTY5NTljMDNmXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/White_Bird_(film)"
  },
  {
    name: "Bhool Bhulaiyaa 3",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00353996-cpbypudxwl-portrait.jpg",
    link: "https://en.wikipedia.org/wiki/Bhool_Bhulaiyaa_3"
  },
  {
    name: "Fighter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLryX-l0H3C_PcKest2kqeXhIZXkYwragHSKrPzHqnBAcwYiUaPXoErQ1TXg6O-dS910&usqp=CAU",
    link: "https://en.wikipedia.org/wiki/Fighter_(2024_film)"
  },
  {
    name: "Stree 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DiL7I-eBgSzcPcdaxezuaBLyRkk_kowa3sXv6I5DBLHk799OWxLR1tgRzNvyADFmRMg&usqp=CAU",
    link: "https://en.wikipedia.org/wiki/Stree_2"
  },
  {
    name: "Singham Again",
    image: "https://m.media-amazon.com/images/M/MV5BOGFhNzIyNjQtOWU1Yi00MzlmLTg0Y2QtOTkxYjdmZGM1MDNhXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Singham_Again"
  },
  {
    name: "SpellBound",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Spellbound_%282024_film%29.jpg/220px-Spellbound_%282024_film%29.jpg",
    link: "https://en.wikipedia.org/wiki/Spellbound_(2024_film)"
  },
  {
    name: "Out Of My Mind",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Out_of_My_Mind_poster.jpg",
    link: "https://en.wikipedia.org/wiki/Out_of_My_Mind_(film)"
  },
  {
    name: "The Lost Children",
    image: "https://m.media-amazon.com/images/M/MV5BZjcxZjFhMWItN2Y2MC00MmZhLWExNzEtOTBiNmYyODgyYWRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://www.imdb.com/name/tt34058121/"
  },
  {
    name: "Alien Romulus",
    image: "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Alien:_Romulus"
  },
  {
    name: "Joy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYzzzOJnxAItGo8zv5EX9Ff926ijF4fw7Rw&s",
    link: "https://www.imdb.com/name/tt10243672/"
  },
  {
    name: "Martin",
    image: "https://upload.wikimedia.org/wikipedia/en/3/36/Martin_2023_film_poster.jpg",
    link: "https://en.wikipedia.org/wiki/Martin_(2024_film)"
  }
];

const movieListPopular = [
  {
    name: "Insidious The Red Door",
    image: "https://m.media-amazon.com/images/M/MV5BMGExMzQ2NWYtMjk2My00YzczLTk0MGQtYzliNDU3ZjU1NDU1XkEyXkFqcGc@._V1_QL75_UY207_CR13,0,140,207_.jpg",
    link: "https://en.wikipedia.org/wiki/Insidious:_The_Red_Door"
  },
  {
    name: "Guilty",
    image: "https://m.media-amazon.com/images/M/MV5BMTRmYmVjODctNTY1YS00MjQ2LTk5ZmMtMjMyYTkzYzcyNzkxXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Guilty_(2020_film)"
  },
  {
    name: "Slender Man",
    image: "https://m.media-amazon.com/images/M/MV5BZGNhNjI1ODAtY2ViNC00MDY2LWJlYjQtYTQzMjk2M2I3OGEyXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Slender_Man_(film)"
  },
  {
    name: "Mrs. Serial Killer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpBLAJRFv4BM5xKLSmNjs49DpufSHHz1gcQ&s",
    link: "https://en.wikipedia.org/wiki/Mrs._Serial_Killer"
  },
  {
    name: "Hum Do Hamare Do",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hum-do-hamare-do-et00315894-12-10-2021-12-08-37.jpg",
    link: "https://en.wikipedia.org/wiki/Hum_Do_Hamare_Do"
  },
  {
    name: "Poltergeist",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_712c34b3.jpeg?region=0%2C0%2C800%2C1200",
    link: "https://en.wikipedia.org/wiki/Poltergeist_(1982_film)"
  },
  {
    name: "The Wife",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-wife-et00301938-17-03-2021-03-36-30.jpg",
    link: "https://en.wikipedia.org/wiki/The_Wife_(2021_film)"
  },
  {
    name: "Truth Or Dare",
    image: "https://m.media-amazon.com/images/M/MV5BMmFkMmJhNzItNzllOS00NjBmLTgyNTgtZjQxZDExZmMyZGU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Truth_or_Dare_(2018_film)"
  },
  {
    name: "1920",
    image: "https://m.media-amazon.com/images/S/pv-target-images/1b0cd33b6a5dbd0c9e0354af4ce71de4df0175d53a02bbe255104226ec75409a.jpg",
    link: "https://en.wikipedia.org/wiki/1920_(film)"
  },
  {
    name: "Kalank",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Kalank_Poster.jpg/220px-Kalank_Poster.jpg",
    link: "https://en.wikipedia.org/wiki/Kalank"
  },
  {
    name: "Munjya",
    image: "https://upload.wikimedia.org/wikipedia/en/3/39/Munjya_2024.jpg",
    link: "https://en.wikipedia.org/wiki/Munjya_(film)"
  },
  {
    name: "Tubelight",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGG3xssMizttbWWmIPQvi-YbXZO2F1AQ-WjA&s",
    link: "https://en.wikipedia.org/wiki/Tubelight_(2017_Hindi_film)"
  },
  {
    name: "Sanam Teri Kasam",
    image: "https://m.media-amazon.com/images/M/MV5BYTJmYmI0YWQtYjI3MC00MWU4LWI2OTQtNDYyOGEyNThjZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Sanam_Teri_Kasam_(2016_film)"
  },
  {
    name: "Transformers One",
    image: "https://m.media-amazon.com/images/I/81crfMsp3qL._AC_UF1000,1000_QL80_.jpg",
    link: "https://en.wikipedia.org/wiki/Transformers_One"
  },
  {
    name: "Sector 36",
    image: "https://m.media-amazon.com/images/M/MV5BMGE0YWU1MmEtN2FhMS00NzBlLWE3MTgtMWZkYjdmNDg5ZTFiXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Sector_36"
  }
];

const movieListhorrorMovies = [
  {
    name: "Evil Dead Rise",
    image: "https://m.media-amazon.com/images/M/MV5BMjM1ZmViMmYtOGYzZC00YzhmLWE0MTMtMzNjYzcyNjEwYWRkXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Evil_Dead_Rise"
  },
  {
    name: "Smile",
    image: "https://m.media-amazon.com/images/M/MV5BNTlmOWI2ZDctZDM4Ny00YzljLTlmYTAtOTgxZmI5MGU1Yzk3XkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Smile_(2022_film)"
  },
  {
    name: "The Conjuring 2",
    image: "https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/The_Conjuring_2"
  },
  {
    name: "Anabelle Creation",
    image: "https://resizing.flixster.com/JazMAu-LhUF9ieEpw6MtogTZQ-k=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12742365_p_v10_az.jpg",
    link: "https://en.wikipedia.org/wiki/Annabelle:_Creation"
  },
  {
    name: "Hereditary",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__IRWAYx9eZ5rKANQMljmeWtQTIxx-YZ5CQ&s",
    link: "https://en.wikipedia.org/wiki/Hereditary_(film)"
  },
  {
    name: "Pet Semetary",
    image: "https://m.media-amazon.com/images/M/MV5BNWQ0ZTQ2NTQtNGQ3MS00YTdlLThlOTAtZDBiZDkzNDk1MDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Pet_Sematary_(2019_film)"
  },
  {
    name: "Insidious The Red Door",
    image: "https://m.media-amazon.com/images/M/MV5BMGExMzQ2NWYtMjk2My00YzczLTk0MGQtYzliNDU3ZjU1NDU1XkEyXkFqcGc@._V1_QL75_UY207_CR13,0,140,207_.jpg",
    link: "https://en.wikipedia.org/wiki/Insidious:_The_Red_Door"
  },
  {
    name: "Talk To Me",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFqlNzGwoboZOM7kIxMgeS7OSyRteVuWh9A&s",
    link: "https://en.wikipedia.org/wiki/Talk_to_Me_(2022_film)"
  },
  {
    name: "The Unholy",
    image: "https://www.sonypictures.in/sites/india/files/2022-04/DP_6002959_UNHOLY%2C%20THE%20%282021%29_KeyArt_English_1333x2000.jpg",
    link: "https://en.wikipedia.org/wiki/The_Unholy_(2021_film)"
  },
  {
    name: "The Conjuring",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAMhFFR3qVGHXh4DfSq2UgqI_HMn5IFrXZw&s",
    link: "https://en.wikipedia.org/wiki/The_Conjuring"
  },
  {
    name: "Light's Out",
    image: "https://m.media-amazon.com/images/M/MV5BOGUyNmQxNjQtNjU1OS00YTExLWFjMGUtNWVhN2Y0MGE2ZmZmXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Lights_Out_(2016_film)"
  },
  {
    name: "The Invisible Man",
    image: "https://m.media-amazon.com/images/M/MV5BYTM3NDJhZWUtZWM1Yy00ODk4LThjNmMtNDg3OGYzMGM2OGYzXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/The_Invisible_Man_(2020_film)"
  },
  {
    name: "Pari",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Pari_-_Poster.jpg/220px-Pari_-_Poster.jpg",
    link: "https://en.wikipedia.org/wiki/Pari_(2018_Indian_film)"
  },
  {
    name: "The Witch",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png",
    link: "https://en.wikipedia.org/wiki/The_Witch_(2015_film)"
  },
  {
    name: "Annabelle Comes Home",
    image: "https://images.moviesanywhere.com/412278051451bd29427d51bcb3fc468e/4311f1f7-9863-4be4-a45b-921adcf4dbac.jpg",
    link: "https://en.wikipedia.org/wiki/Annabelle_Comes_Home"
  }
];

const movieListsciFiMovies = [
  {
    name: "Interstellar",
    image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Interstellar_(film)"
  },
  {
    name: "Arrival",
    image: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Arrival_(film)"
  },
  {
    name: "The Platform 2",
    image: "https://m.media-amazon.com/images/M/MV5BNzI4YjkyODctMGJmNC00YjBjLTllNjAtNDkxNTJmZjg4MGZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/The_Platform_2"
  },
  {
    name: "Annihilation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYYUTJibjiWvKmBFEjO1LEEz9qYimCw8cHQ&s",
    link: "https://en.wikipedia.org/wiki/Annihilation_(film)"
  },
  {
    name: "2067",
    image: "https://m.media-amazon.com/images/M/MV5BNTU1MGRjNzMtMWIyNi00ZTYxLWIxZjctNGFmODM2M2QyNjcwXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/2067_(film)"
  },
  {
    name: "Predestination",
    image: "https://m.media-amazon.com/images/M/MV5BY2VhODM5OTUtZDJhMi00MTc5LThjNjYtZWY1M2NlNWU0N2NjXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Predestination_(film)"
  },
  {
    name: "The Hunger Games",
    image: "https://m.media-amazon.com/images/M/MV5BMWI1OGM4YjQtNmIxNi00YmE2LWJkNTAtY2Q0YjU4NTI5NWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/The_Hunger_Games_(film)"
  },
  {
    name: "The Martian",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg?region=0%2C0%2C800%2C1200",
    link: "https://en.wikipedia.org/wiki/The_Martian_(film)"
  },
  {
    name: "The 5th Wave",
    image: "https://m.media-amazon.com/images/M/MV5BMDg1OGUyNDAtM2IwZS00YWMwLWI2MjMtOTZjZTUzNDc0M2QzXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/The_5th_Wave_(film)"
  },
  {
    name: "The Adam Project",
    image: "https://m.media-amazon.com/images/M/MV5BNWU1NDJlYWUtYWE1OC00MGVlLTliNzYtMjg4OTk0MWE4MDQ4XkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/The_Adam_Project"
  },
  {
    name: "Atlas",
    image: "https://assets.gadgets360cdn.com/pricee/assets/product/202403/Atlas_Poster_1_1710469572.jpg",
    link: "https://en.wikipedia.org/wiki/Atlas_(2024_film)"
  },
  {
    name: "Independence Day",
    image: "https://m.media-amazon.com/images/I/81+uOmYLmrL._AC_UF1000,1000_QL80_.jpg",
    link: "https://en.wikipedia.org/wiki/Independence_Day_(1996_film)"
  },
  {
    name: "Inception",
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Inception"
  },
  {
    name: "Ad Astra",
    image: "https://m.media-amazon.com/images/M/MV5BOGRhOGNjZjEtNTU2Ni00MDlmLWI3MWEtNzc1OGE2ZmEwZGNhXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Ad_Astra_(film)"
  },
  {
    name: "Gravity",
    image: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Gravity_(2013_film)"
  }
];
const movieListromanceMovies = [
  {
    name: "Veer-Zaara",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT9LkDZW3QsYe15qC0DVX-FUnaGbghH4oCHcXBY7KgmiVRUkc3x&psig=AOvVaw0mi2QPNeNc6cvVZJHsbmqO&ust=1734194009513000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjg96OWpYoDFQAAAAAdAAAAABAE",
    link: "https://en.wikipedia.org/wiki/Veer-Zaara"
  },
  {
    name: "Titanic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA",
    link: "https://en.wikipedia.org/wiki/Titanic_(1997_film)"
  },
  {
    name: "Me Before You",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg",
    link: "https://en.wikipedia.org/wiki/Me_Before_You_(film)"
  },
  {
    name: "Laila Majnu",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmKykxVRl94bztWnBFMHnAuR7GIhcaGsoVQ09nFk90pTFzSZSeZapkqFqSp0i8V5_Xq2uZjg",
    link: "https://en.wikipedia.org/wiki/Laila_Majnu_(2018_film)"
  },
  {
    name: "Aashiqui-2",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6Ljb3xO4qvZKVrrBOmPUrs1TJKRvqq8u-LAPCFr-n0cGX6_7faZwkU2yotjcFKMSVT72O",
    link: "https://en.wikipedia.org/wiki/Aashiqui_2"
  },
  {
    name: "Beauty and the Beast",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ2YFqiVsUBFis1CLEDAqC5h-UyE23N61-AAMo7LJmMC8KhF_rV-WEv_Jxb1NJjNydURzA6",
    link: "https://en.wikipedia.org/wiki/Beauty_and_the_Beast_(2017_film)"
  },
  {
    name: "Falling Inn Love",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Falling_Inn_Love_poster.png/220px-Falling_Inn_Love_poster.png",
    link: "https://en.wikipedia.org/wiki/Falling_Inn_Love"
  },
  {
    name: "Dil Bechara",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRsgstwnzbn3S85Nqg4SD89VR16Qwm1RRGJAK45HvkG9n8zU9JB2ypQKwX03h1PbDdrBY3zw",
    link: "https://en.wikipedia.org/wiki/Dil_Bechara"
  },
  {
    name: "Sanam Teri Kasam",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVAxC3dLqgIbnbViW8Cd0l7wLeec-UGRbj-w&s",
    link: "https://en.wikipedia.org/wiki/Sanam_Teri_Kasam_(2016_film)"
  },
  {
    name: "Lootera",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAoliGDjYFWE_IhRjsQAKnQgMtHA4YLPaGGm80018XMLGtSYNk3nE1ustNcz2KifSMmnkxyA",
    link: "https://en.wikipedia.org/wiki/Lootera"
  },
  {
    name: "Rockstar",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTixMEf-DxzqwyMsE3aaShS-0Zz6fcL1buE8QXqAn1jZuPD4BmO2lQeEKSzKbV2UMqoMHE",
    link: "https://en.wikipedia.org/wiki/Rockstar_(2011_film)"
  },
  {
    name: "October",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgTGEG6zANFqCGP-vczfejJdc3XTeWRkSLclr7usr098u1vFd3HBZjtVm4oQSjKC4Zm-l9",
    link: "https://en.wikipedia.org/wiki/October_(2018_film)"
  },
  {
    name: "Love, Rosie",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgIsrOtKjPvb1fgyLp0hLYp0rBxNbdu-xNTgfkiyBacwn8Hyu3MwT05oa5YOaoeK0JiX_S",
    link: "https://en.wikipedia.org/wiki/Love,_Rosie_(film)"
  },
  {
    name: "Half Girlfriend",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRojb4ew-6oFI-cqMJOYUozzsdeNIV70PcbVKvl_7WpWQWLXS0fD_DJp-AA0EecWLBoib5y_g",
    link: "https://en.wikipedia.org/wiki/Half_Girlfriend_(film)"
  },
  {
    name: "Dhadak",
    image: "https://m.media-amazon.com/images/M/MV5BMDU3NTZkYzAtM2Y2Zi00NGQxLWFjYzAtZWFmZDI1MTg2ZjQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Dhadak"
  }
];

const movieListcomedyMovies = [
  {
    name: "Monica, O My Darling",
    image: "https://m.media-amazon.com/images/M/MV5BY2JkNTU0MDEtMzdhNC00NTZkLWI0YTMtZTdlZDkxM2Q0MTZjXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Monica,_O_My_Darling"
  },
  {
    name: "Kho Gaye Hum Kahan",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26337954_p_v10_aa.jpg",
    link: "https://en.wikipedia.org/wiki/Kho_Gaye_Hum_Kahan"
  },
  {
    name: "IF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRAb0RH2epL5_fAtFEZAo28gehTSYQbGGKg&s",
    link: "https://en.wikipedia.org/wiki/IF_(film)"
  },
  {
    name: "Bad Newz",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Bad_Newz_poster.jpg/220px-Bad_Newz_poster.jpg",
    link: "https://en.wikipedia.org/wiki/Bad_Newz_(film)"
  },
  {
    name: "The Family Plan",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/The-Family-Plan-Poster.webp",
    link: "https://en.wikipedia.org/wiki/The_Family_Plan"
  },
  {
    name: "3 Idiots",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8ekIejtwy_2YbnEQ6O0IjW9Vd33Jq6Ddig&s",
    link: "https://en.wikipedia.org/wiki/3_Idiots"
  },
  {
    name: "Welcome",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Welcome_poster_2007.jpg/220px-Welcome_poster_2007.jpg",
    link: "https://en.wikipedia.org/wiki/Welcome_(2007_film)"
  },
  {
    name: "Hera Pheri",
    image: "https://m.media-amazon.com/images/M/MV5BNDZmMGEwMjQtNjFlNi00ZGIxLTlkZjItNmU3Mzg4Y2E0ZjUzXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Hera_Pheri_(2000_film)"
  },
  {
    name: "Bhool Bhulaiyaa",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg",
    link: "https://en.wikipedia.org/wiki/Bhool_Bhulaiyaa"
  },
  {
    name: "Heyy Babyy",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Heyybabyyposter.jpg",
    link: "https://en.wikipedia.org/wiki/Heyy_Babyy"
  },
  {
    name: "Chennai Express",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Chennai_Express.jpg/220px-Chennai_Express.jpg",
    link: "https://en.wikipedia.org/wiki/Chennai_Express"
  },
  {
    name: "Munna Bhai M.B.B.S",
    image: "https://m.media-amazon.com/images/M/MV5BMDE3ZDYzZDctOWJiYS00MTE5LTk0NzgtOThhZTRmZDQ2ZmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://en.wikipedia.org/wiki/Munna_Bhai_M.B.B.S."
  },
  {
    name: "Dhamaal",
    image: "https://upload.wikimedia.org/wikipedia/en/6/60/Dhamaal_2007.jpg",
    link: "https://en.wikipedia.org/wiki/Dhamaal"
  },
  {
    name: "Golmaal Again",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Ajay_Devgn%27s_Golmaal_Again_poster.jpg",
    link: "https://en.wikipedia.org/wiki/Golmaal_Again"
  },
  {
    name: "No Problem",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f1/No_problem_poster.jpg",
    link: "https://en.wikipedia.org/wiki/No_Problem_(2010_film)"
  }
];

const movieListkDramaSeries = [
  {
    name: "Queen Of Tears",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e2/Queen_of_Tears_poster.png",
    link: "https://en.wikipedia.org/wiki/Queen_of_Tears"
  },
  {
    name: "Business Proposal",
    image: "https://asianwiki.com/images/a/a8/Business_Proposal-p1.jpg",
    link: "https://en.wikipedia.org/wiki/Business_Proposal"
  },
  {
    name: "Vincenzo",
    image: "https://upload.wikimedia.org/wikipedia/en/5/5b/Vincenzo_TV_series.jpg",
    link: "https://en.wikipedia.org/wiki/Vincenzo_(TV_series)"
  },
  {
    name: "My Demon",
    image: "https://cinetown.s3.ap-south-1.amazonaws.com/webseries/poster/1701459099.jpeg",
    link: "https://en.wikipedia.org/wiki/My_Demon"
  },
  {
    name: "The Legend of the Blue Sea",
    image: "https://images.sr.roku.com/idType/roku/context/global/id/9d97bfd7b3115ddd87b964d293b8aef7/images/gracenote/assets/p13497967_b_v8_ao.jpg/magic/396x0/filters:quality(70)",
    link: "https://en.wikipedia.org/wiki/The_Legend_of_the_Blue_Sea"
  },
  {
    name: "Night Has Come",
    image: "https://static.seriesreminder.com/tvdb/sr_posters/night-has-come/65647c8d12e47.jpg",
    link: "https://static.seriesreminder.com/tvdb/sr_posters/night-has-come/65647c8d12e47.jpg" // Note: This link is to an image, not a Wikipedia page for the series
  },
  {
    name: "Moving",
    image: "https://koalasplayground.com/wp-content/uploads/2024/09/regrea.jpg",
    link: "https://en.wikipedia.org/wiki/Moving_(South_Korean_TV_series)"
  },
  {
    name: "It's Okay to Not Be Okay",
    image: "https://upload.wikimedia.org/wikipedia/en/5/58/It%27s_Okay_to_Not_Be_Okay_Poster.jpg",
    link: "https://en.wikipedia.org/wiki/It%27s_Okay_to_Not_Be_Okay"
  },
  {
    name: "Tail of the Nine Tailed",
    image: "https://image.tmdb.org/t/p/original/81FtvGV6AyGlzxyt5Jl9iObxvcI.jpg",
    link: "https://en.wikipedia.org/wiki/Tale_of_the_Nine_Tailed"
  },
  {
    name: "Squid Game",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQGZUVAOqKSKi1Ah6hZ58eRkBDxciDAmfPA8rNrnF6xkD5iB440nBH8DoiReHc2FqalupOy",
    link: "https://en.wikipedia.org/wiki/Squid_Game"
  },
  {
    name: "Alice In Borderland",
    image: "https://miro.medium.com/v2/resize:fit:1000/1*GXEa_EYfyz3c36Rms4UNfQ.jpeg",
    link: "https://en.wikipedia.org/wiki/Alice_in_Borderland_(TV_series)"
  },
  {
    name: "Crash Landing on You",
    image: "https://m.media-amazon.com/images/M/MV5BZjM2ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_.jpg",
    link: "https://en.wikipedia.org/wiki/Crash_Landing_on_You"
  },
  {
    name: "All Of Us Are Dead",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpM8w4yQ076pMOwGCD1u2ih6MlJOxbFGaw25nMgruyNuT_XHATVrAPb_XmeKmfoBvLrXvIfg",
    link: "https://en.wikipedia.org/wiki/All_of_Us_Are_Dead"
  },
  {
    name: "Descendants of the Sun",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/DescendantsoftheSun.jpg/220px-DescendantsoftheSun.jpg",
    link: "https://en.wikipedia.org/wiki/Descendants_of_the_Sun"
  },
  {
    name: "18 Again",
    image: "https://i.mydramalist.com/xnNnq_4f.jpg",
    link: "https://en.wikipedia.org/wiki/18_Again"
  },
  {
    name: "Sweet Home",
    image: "https://asianwiki.com/images/4/47/Sweet_Home-Netflix-MP2.jpg",
    link: "https://en.wikipedia.org/wiki/Sweet_Home_(TV_series)"
  }
];
const movieListCDramaSeries  = [
    {
        name: "Our Secret",
        link: "https://www.amazon.in/minitv/tp/d9cf0355-7c06-42b1-bf07-d9210758747d",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Our_Secret_%28TV_series%29_official_poster.jpg/220px-Our_Secret_%28TV_series%29_official_poster.jpg"
    },
    {
        name: "Hidden Love",
        link: "https://en.wikipedia.org/wiki/Hidden_Love_(TV_series)",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Hidden_Love_2023_TV_series.jpg/220px-Hidden_Love_2023_TV_series.jpg"
    },
    {
        name: "Put Your Head On My Shoulder",
        link: "https://en.wikipedia.org/wiki/Put_Your_Head_on_My_Shoulder_(TV_series)",
        image: "https://images.justwatch.com/poster/179758857/s718/put-your-head-on-my-shoulder.jpg"
    },
    {
        name: "My Girlfriend is an Alien",
        link: "https://en.wikipedia.org/wiki/My_Girlfriend_Is_an_Alien",
        image: "https://images.justwatch.com/poster/145380584/s718/my-girlfriend-is-an-alien.jpg"
    },
    {
        name: "Falling Into Your Smile",
        link: "https://en.wikipedia.org/wiki/Falling_into_Your_Smile",
        image: "https://m.media-amazon.com/images/M/MV5BZDQxNDIxOTctNjcwOC00ZDFhLTk4ZTEtNjQ1ZTVmMDk5YmZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        name: "Exclusive Fairytale",
        link: "https://www.imdb.com/name/tt28513615/",
        image: "https://media.senscritique.com/media/000021536043/0/exclusive_fairy_tale.png"
    },
    {
        name: "I Belong to Your World",
        link: "https://www.imdb.com/name/tt27655047/",
        image: "https://image.tmdb.org/t/p/original/AlFUXp1jorpHacbyIWnhIM3qQ6I.jpg"
    },
    {
        name: "Love Between Fairy and Devil",
        link: "https://en.wikipedia.org/wiki/Love_Between_Fairy_and_Devil",
        image: "https://i.mydramalist.com/xJDEr_4f.jpg"
    },
    {
        name: "19th Floor",
        link: "https://www.imdb.com/name/tt30836097/",
        image: "https://m.media-amazon.com/images/M/MV5BODAxZDExODktNGE5MS00OGRkLWEwMDItZjQ3MjM3ODMyN2YzXkEyXkFqcGc@._V1_.jpg"
    },
    {
        name: "When I Fly Towards You",
        link: "https://en.wikipedia.org/wiki/When_I_Fly_Towards_You",
        image: "https://m.media-amazon.com/images/M/MV5BZThhMzJiZDQtMGE3Yi00NDc1LWFhZDgtOWUwYTAyNDJlNTNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
];
const movieListAnime = [
    {
        name: "Kimetsu no Yaiba (Demon Slayer)",
        link: "https://rareanimes.me/demon-slayer-season-1-episodes-hindi-dubbed-download-hd-jio-cinema/",
        image: "https://cdn.moviefone.com/image-assets/895006/2yiDQCDj7hlq2SwLojV9xrFkCnr.jpg?d=360x540"
    },
    {
        name: "Jujutsu Kaisen",
        link: "https://rareanimes.me/jujutsu-kaisen-season-1-hindi-dubbed-episodes-download-fhd/",
        image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe"
    },
    {
        name: "Naruto Shippuden",
        link: "https://rareanimes.me/naruto-shippuden-season-01-episodes-hindi-dubbed-download-hd/",
        image: "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        name: "Solo Leveling",
        link: "https://rareanimes.me/solo-leveling-season-1-hindi-dubbed-episodes-download-hd/",
        image: "https://static.wixstatic.com/media/1cf3ac_6ea6668ada5d48fe95b269a9177c2e3e~mv2.png/v1/fill/w_480,h_720,al_c,lg_1,q_85/1cf3ac_6ea6668ada5d48fe95b269a9177c2e3e~mv2.png"
    },
    {
        name: "Chainsaw Man",
        link: "https://rareanimes.me/chainsaw-man-season-1-censored-hindi-episodes-download-crunchyroll/",
        image: "https://funkygraphix.co.uk/cdn/shop/products/ChainsawMan_2022_v6A3_1000x.jpg?v=1681293792"
    },
    {
        name: "Spy x Family",
        link: "https://rareanimes.me/spy-x-family-season-1-hindi-dubbed-episodes-download-hd/",
        image: "https://m.media-amazon.com/images/I/81eVcxUwfRL._UF1000,1000_QL80_.jpg"
    },
    {
        name: "Black Clover",
        link: "https://rareanimes.me/black-clover-season-01-episodes-hindi-dubbed-download-hd/",
        image: "https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg"
    },
    {
        name: "Dragon Ball DAIMA",
        link: "https://rareanimes.me/dragon-ball-daima-season-1-hindi-dubbed-subbed-episodes-download-hd/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtC5P1iU_VvzHiSUJuVuQPzJKfFSLdgbMaI_XwryxmeaG3SCeZP1DKZCZZa8SkJw4LHA&usqp=CAU"
    },
    {
        name: "One Piece",
        link: "https://rareanimes.me/one-piece-season-01-episodes-hindi-tamil-telugu-dubbed-download-hd/",
        image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/onepiecebig.png"
    },
    {
        name: "Mashle: Magic and Muscles",
        link: "https://rareanimes.me/mashle-magic-and-muscles-season-1-hindi-episodes-download/",
        image: "https://m.media-amazon.com/images/M/MV5BMjMyNjg4MzItMGI3MS00MGVmLWE5MDMtODk4NjIyNzFlOWZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        name: "The Daily Life of the Immortal King",
        link: "https://rareanimes.me/the-daily-life-of-the-immortal-king-season-3-hindi-download-hd/",
        image: "https://images.justwatch.com/poster/319839040/s718/season-4.jpg"
    },
    {
        name: "Classroom of the Elite",
        link: "https://www.crunchyroll.com/series/GRVN8MNQY/classroom-of-the-elite",
        image: "https://m.media-amazon.com/images/M/MV5BMDg3MGVhNWUtYTQ2NS00ZDdiLTg5MTMtZmM5MjUzN2IxN2I4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        name: "Blue Lock",
        link: "https://rareanimes.me/blue-lock-season-1-hindi-dubbed-episodes-download-hd/",
        image: "https://m.media-amazon.com/images/M/MV5BNWFlNmJkN2YtNGRiZS00NjExLTlmNmEtYzdiMTdiZmMzYzAwXkEyXkFqcGc@._V1_.jpg"
    },
    {
        name: "My Hero Academia",
        link: "https://rareanimes.me/my-hero-academia-all-seasons-and-movies-hindi-episodes-download-hd/",
        image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12793542_b_v13_ak.jpg"
    },
    {
        name: "Alya Sometimes Hides Her Feelings in Russian",
        link: "https://rareanimes.me/alya-sometimes-hides-her-feelings-in-russian-season-1-hindi-dubbed-episodes-download-hd/",
        image: "https://m.media-amazon.com/images/M/MV5BNjg0YTVjNTItZTI1ZC00MDZlLTg5MTMtZmM5MjUzN2IxN2I4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        name: "Beyblade G-Revolution",
        link: "https://rareanimes.me/beyblade-season-3-g-revolution-hindi-episodes-download-in-hd/",
        image: "https://images.static-bluray.com/products/20/83436_1_large.jpg"
    },
    {
        name: "My Unique Skill Makes Me OP even at Level 1",
        link: "https://rareanimes.me/my-unique-skill-makes-me-op-even-at-level-1-hindi-dubbed-episodes-download-hd/",
        image: "https://m.media-amazon.com/images/M/MV5BOTM4YWQzNGEtZTBiZi00NGIyLWE2NDQtMjcyYzM4NWFmN2Q2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
];
const movieListCartoon = [
    {
        name: "Doremon",
        link: "https://rareanimes.me/doraemon-all-movies-hindi-dubbed-download-hd/",
        image: "https://i.pinimg.com/736x/71/ed/b4/71edb4ea498b56f845356f8c9915de3d.jpg"
    },
    {
        name: "Shinchan",
        link: "https://rareanimes.me/shinchan-all-movies-hindi-tamil-telugu-download-hd/",
        image: "https://i.pinimg.com/736x/ea/de/93/eade9341cd3284a06c24487f2bd332b4.jpg"
    },
    {
        name: "Oggy and The Cockroaches",
        link: "https://rareanimes.me/oggy-and-the-cockroaches-season-1-hindi-episodes-download-hd/",
        image: "https://m.media-amazon.com/images/M/MV5BNzY3ZDVhMDMtOWQ1NS00NDc2LWI2OGQtY2YxOTdjMDMxZjJiXkEyXkFqcGc@._V1_.jpg"
    },
    {
        name: "Horrid Henry",
        link: "https://rareanimes.me/horrid-henry-season-3-episodes-hindi-download-hd/",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYIfKk-MtxeuMcR4V4XEEorlVNM0I4aKm2sgUX_-s8ChMnbK86ToIjjnRUN5cl2SzxhaiVPw"
    },
    {
        name: "Ben 10",
        link: "https://rareanimes.me/ben-10-all-movies-hindi-tamil-telugu-dubbed-download-hd/",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCEQe9i7wojJ5WCuYDrv8okretbUzf_pKi6Se8a6pdcpVGHL391TcJFMhl1ECjMAqlTHr9zA"
    },
    {
        name: "Chota Bheem",
        link: "https://www.chhotabheem.com/",
        image: "https://rukminim2.flixcart.com/image/850/1000/k070zgw0/poster/z/x/g/large-chhota-bheem-hd-poster-for-kids-multicolor-300gsm-matte-12-original-imafkyrk6gggsv7j.jpeg?q=90&crop=false"
    },
    {
        name: "We Bare Bears",
        link: "https://rareanimes.me/we-bare-bears-the-movie-2020-hindi-tamil-telugu-download-hd/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTej7fhFUWrkOiR3--0gE3o350Ne9kwAL6GS4Gu0qOskTOvDLL4SSNxAXoqBYcUDV0GVqBX4A"
    },
    {
        name: "Phineas and Ferb",
        link: "https://rareanimes.me/phineas-and-ferb-all-movies-hindi-dubbed-download-hd/",
        image: "https://m.media-amazon.com/images/I/71dG3jzachL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        name: "Haddi Mera Buddy",
        link: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq9IeB43rCC1jWjPy6h1LcmzrN7cvx8ZfTg&s"
    },
    {
        name: "Noddy",
        link: "",
        image: "https://m.media-amazon.com/images/M/MV5BZmMyN2ZiY2EtMDJmNi00YTBiLTk1OTEtOWE3Y2Q2N2Y3N2VlXkEyXkFqcGc@._V1_QL75_UY281_CR11,0,190,281_.jpg"
    },
    {
        name: "Oswald",
        link: "",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPFB0d7NOCr0vx4SLNCKoxQUKiF-ZtXjHmsa6Kr2eUUcfvLj3MuPd-aaRF8VdU3ssvBTiv"
    },
    {
        name: "Tom And Jerry",
        link: "",
        image: "https://m.media-amazon.com/images/I/71BT3dfJoKL.jpg"
    },
    {
        name: "Motu Patlu",
        link: "",
        image: "https://image.tmdb.org/t/p/original/yY3l4uSvUek8uA7kVriEh7mHtcQ.jpg"
    },
    {
        name: "Little Krishna",
        link: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOjhbAYz5OIXavHrcYu_RjOYmwyoeU8JxPg&s"
    },
    {
        name: "Peppa Pig",
        link: "",
        image: "https://image.tmdb.org/t/p/original/ycf1ZqisXs8ZCGmw0reD1pI2Zlp.jpg"
    },
    {
        name: "The Powerpuff Girls",
        link: "",
        image: "https://www.redwolf.in/image/cache/catalog/designer-Images/themes/the-powerpuff-girls-artist-image-438x438.png?m=1687857143"
    }
];
export default movieListAll;
export {movieListLatest, movieListPopular, movieListhorrorMovies, movieListsciFiMovies, movieListromanceMovies, movieListcomedyMovies, movieListkDramaSeries, movieListCDramaSeries, movieListAnime, movieListCartoon};