const pg = require('pg');
const connectionString = process.env.DATABASE_URL  // get thhe environment variable value from the app server


function getMovieType(request, response) {
    var client = new pg.Client(connectionString) // gets database connection with connectionstring credentials 
    client.connect(); // makes the actual connection

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
}