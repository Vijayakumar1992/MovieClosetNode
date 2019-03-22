const pg = require('pg');
const connectionString = process.env.DATABASE_URL  // get thhe environment variable value from the app server


function getMovies(request, response) {
    var client = new pg.Client(connectionString) // gets database connection with connectionstring credentials 
    client.connect(); // makes the actual connection
    var movieType = request.query.type;


// my second and third functions
    // function getSearchMovieType(request, response) {
    // var client = new pg.Client(connectionString) 
    // client.connect(); 

    // function addMovie(request, response) {
    // var client = new pg.Client(connectionString) 
    // client.connect(); 

    // need to figure out how to get the data on the my webbrowser instead of on console. 
    client.query('SELECT * FROM movie', (err, resultSet) => {
        if (err) {
          console.log(err.stack)
        } else {
            response.json(resultSet);
            
        }
      });
    
}

// tell them what function we are gonna use
module.exports = {   
    getMovieType: getMovieType


    // getSearchMovieType: getSearchMovieType
    // getAddMovie: getAddMovie
};