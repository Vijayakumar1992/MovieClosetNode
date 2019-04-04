const pg = require('pg');
require('dotenv').config();
const connectionString = process.env.DATABASE_URL // get thhe environment variable value from the app server
//tells the Pool object to use this connection string
//const pool = new Pool({connectionString: connectionString}); 

function getMovies(request, response) {
  console.log("connection is: " + connectionString);
  var client = new pg.Client(connectionString) // gets database connection with connectionstring credentials 
  client.connect(); // makes the actual connection

  var text;
  var values;     
if ( request.query.type == "all")
{
   text = "SELECT * FROM movie";
   values = [];
}
else{
  // getts the movie type and diplay the id and then below outputs the movies name 
   text = 'SELECT * FROM movie WHERE movie_type_id = (SELECT movie_type_id FROM movie_type WHERE movie_type_name = $1)';
   values = [request.query.type];
}  

  // callback
  client.query(text, values, (error, resultSet) => {    
    if (error) {
      console.log(error.stack);
    } else {
      response.json(resultSet.rows);
    }
  })

}
//post or adds movies from the user
function addMovies(request, response) {
  var client = new pg.Client(connectionString)
  client.connect();

  var movieType = request.body.movieType;
  var movieName = request.body.movieName; 
  //var movieWatched = request.body.movieWatched; 
  var genre = request.body.genre; 

  const text = 'INSERT INTO movie VALUES (default, $1, $2, $3, $4)' //prepared statement for sql
  const values = [movieType, movieName, false, genre]

  //Takes two above codes and puts them together into one data
  client.query(text, values, (error, resultSet) => {
    console.log(resultSet);
    if (error) {
      console.log(error.stack);
      //response.json("error: Movie entered incorrectly")
    } else {
      response.status(200).send(); // sends the data back to user 
    }
  })

}

function deleteMovies(request, response){  
  var client = new pg.Client(connectionString)
  client.connect();
  var movieName = request.body.movieName;

  const text = 'DELETE FROM movie WHERE movie_name = $1'
  const values = [movieName]

  client.query(text, values, (error, resultSet) => {
    console.log(resultSet);
    if (error) {
      console.log(error.stack);
      //response.json("error: Movie entered incorrectly")   
    } else {
      response.status(200).send(); // sends the data back to user 
    }
  })

}

function editMovies(request, response){  
  var client = new pg.Client(connectionString)
  client.connect();
  
  var oldMovieName = request.query.oldMovieName;
  var newMovieName = request.query.newMovieName;

  const text = 'UPDATE movie SET movie_name = $1 WHERE movie_name = $2';
  const values = [newMovieName, oldMovieName]

  client.query(text, values, (error, resultSet) => {
    console.log(resultSet);
    if (error) {
      console.log(error.stack);
      //response.json("error: Movie entered incorrectly")   
    } else {
      response.status(200).send(); // sends the data back to user 
    }
  })

}


// tell them what function we are gonna use
module.exports = {
  getMovies: getMovies,
  addMovies: addMovies,
  deleteMovies: deleteMovies,
  editMovies: editMovies 

};