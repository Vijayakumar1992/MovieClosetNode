function getMovies(movieType) {
    var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server    
    //defines a function to be executed when the readyState property changes
    xhttp.onreadystatechange = function ()
    {        
        if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest          

            let html = "<ul>";
                var movieData = JSON.parse(this.responseText); // turns text into js object
                console.log(movieData); // actually turning into js object
                console.log(movieData.rowCount);  // accessing js object

                for( var i= 0; i < movieData.rowCount; i++){
                        console.log(movieData.rows[i].movie_name);            
                    html += "<li>" + movieData.rows[i].movie_name + "</li>";               
                }           
            html += "</ul>"; // closing ul  list
            //using movieList to display the movies in the front end page of html
            document.getElementById("movieList").innerHTML = html; // takis html insert into html
        }
    }
    
    xhttp.open("GET", "/getMovies?type=" + movieType, true);  //Send a Request To a Server
    xhttp.send();
}