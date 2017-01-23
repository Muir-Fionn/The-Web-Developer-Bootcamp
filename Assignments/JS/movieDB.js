var movies = [
  {
    title: "The Avengers",
    haveWatched: true,
    rating: 4
  },
  {
    title: "Hacksaw Ridge",
    haveWatched: false,
    rating: 4.3
  },
  {
    title: "Hidden Figures",
    haveWatched: false,
    rating: 4
  },
  {
    title: "UP",
    haveWatched: true,
    rating: 4.2
  },
  {
    title: "Despicable Me",
    haveWatched: true,
    rating: 3.9
  },
  {
    title: "Batteries Not Included",
    haveWatched: true,
    rating: 3.3
  }
]

function buildString(movie){
  var result = "You have ";
  if(movie.haveWatched){
    result += "seen "
  }else{
    result += "not seen "
  }
  result += "\"" + movie.title + "\" - "
  result += movie.rating + " stars";
  return result;
}

function printFilms(){
  movies.forEach(function (movie){
    result = buildString(movie);
    console.log(result);
  });
}
