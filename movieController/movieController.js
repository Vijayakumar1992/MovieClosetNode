const pg = require('pg');
require('dotenv').config();
const connectionString = process.env.DATABASE_URL  // get thhe environment variable value from the app server
//tells the Pool object to use this connection string
//const pool = new Pool({connectionString: connectionString}); 


function getMovies(request, response) {
  console.log("connection is: " + connectionString);
    var client = new pg.Client(connectionString) // gets database connection with connectionstring credentials 
    client.connect(); // makes the actual connection
    
// my second and third functions
    // function getSearchMovieType(request, response) {
    // var client = new pg.Client(connectionString) 
    // client.connect(); 

    // function addMovie(request, response) {
    // var client = new pg.Client(connectionString) 
    // client.connect(); 

    // getts the movie type and diplay the id and then below outputs the movies name 
    const text = 'SELECT * FROM movie WHERE movie_type_id = (SELECT movie_type_id FROM movie_type WHERE movie_type_name = $1)';
    const values = [request.query.type];
 
// callback
client.query(text, values, (error, resultSet) => {
  console.log(resultSet);
  if (error) {
    console.log(error.stack);
  } else {
    response.json(resultSet.rows);
  }
})

}

// tell them what function we are gonna use
module.exports = {   
    getMovies: getMovies
    // getSearchMovieType: getSearchMovieType
    // getAddMovie: getAddMovie
};