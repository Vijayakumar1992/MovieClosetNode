function getMovies(movieType) {
    var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server    
    //defines a function to be executed when the readyState property changes
    xhttp.onreadystatechange = function ()
    {        
        if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest          

            let html = "<select id='movies'>";
                var movieData = JSON.parse(this.responseText); // turns text into js object
                console.log(movieData); // actually turning into js object
                console.log(movieData.length);  // accessing js object

                for( var i= 0; i < movieData.length; i++){
                        console.log(movieData[i].movie_name);            
                    html += "<option>" + movieData[i].movie_name + "</option>";               
                }           
            html += "</select>"; // closing ul  list
            html += "<button onclick = 'edit()'> Edit</button>";
            html += "<button onclick = 'deleteMovie()'> Delete</button>";
            //using movieList to display the movies in the front end page of html
            document.getElementById("movieList").style.display = "block";
            document.getElementById("movieList").innerHTML = html; // takis html insert into html
        }
    }
    
    xhttp.open("GET", "/getMovies?type=" + movieType, true);  //Send a Request To a Server
    xhttp.send();
}

function edit() {
    var txt;
    var movie = document.getElementById("movies").value; // will get the movies entered by user      
    var person = prompt("Edit the movie:", movie);
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt =  "This week we will watch:" + person;
    }
    document.getElementById("movieList").innerHTML = txt;
  }

  function deleteMovie() {
    var txt;
    var movie = document.getElementById("movies").value;   
    var person = prompt("Delete the movie:", movie);
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt =  "This week we will watch:" + person;
    }
    document.getElementById("movieList").innerHTML = txt;
  }