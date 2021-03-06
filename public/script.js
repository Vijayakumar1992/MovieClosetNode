function getMovies(movieType) {
    var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server    
    //defines a function to be executed when the readyState property changes
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest     
            let html = "<select id='movies'>";
            var movieData = JSON.parse(this.responseText); // turns text into js object
            console.log(movieData); // actually turning into js object
            console.log(movieData.length); // accessing js object

            for (var i = 0; i < movieData.length; i++) {
                console.log(movieData[i].movie_name);
                html += "<option>" + movieData[i].movie_name + "</option>";
            }
            html += "</select>"; // closing ul  list

            html += "<button onclick = 'edit()'> Edit</button>";
            html += "<button onclick = 'deleteMovie()'> Delete</button>";
            //using movieList to display the movies in the front end page of html
            document.getElementById("movieList").style.display = "block";
            document.getElementById("movieStylecss").style.display = "none"; //displays one box at a time
            document.getElementById("movieList").innerHTML = html; // takis html insert into html
        }
    }

    xhttp.open("GET", "/getMovies?type=" + movieType, true); //Send a Request To a Server
    xhttp.send();
}

function edit() {
    var txt;
    var movie = document.getElementById("movies").value; // will get the movies entered by user      
    var newMovieName = prompt("Edit the movie:", movie);
    if (newMovieName == null || newMovieName == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "The Movie is edited! " + newMovieName;
        document.getElementById("movieList").innerHTML = txt;

        var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server    
            //defines a function to be executed when the readyState property changes
            xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest         
                getMovies("all");
            }
        }
            xhttp.open("GET", "/editMovies?oldMovieName=" + movie + "&newMovieName=" + newMovieName, true); //Send a Request To a Server
            xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhttp.send(); 
    }    
}

function deleteMovie() {
    var txt;
    var movie = document.getElementById("movies").value;
    var person = confirm("Do you want to delete this movie? "+ movie);
    if (person == null ) {
        txt = "User cancelled the prompt.";
    } 
    else {
        txt = "The movie is deleted";
        document.getElementById("movieList").innerHTML = txt;
            
            var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server    
            //defines a function to be executed when the readyState property changes
            xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest         
                console.log ("The movie is deleted");
                getMovies("all");
            }
        }
            xhttp.open("POST", "/deleteMovies", true); //Send a Request To a Server
            xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhttp.send("movieName=" + movie);           
        
    }
}

// //if (txt != "User cancelled the prompt.") {
//     var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server    
//     //defines a function to be executed when the readyState property changes
//     xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest         
//         txt = "The movie is deleted";
//     }
//     xhttp.open("POST", "/deleteMovies", true); //Send a Request To a Server
//     xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhttp.send("movieName=" + nameOfMovie);
//     }

    function displayAddMovie() {
        document.getElementById("movieStylecss").style.display = "block";
        document.getElementById("movieList").style.display = "none"; //displays one box at a time    
    }
    //get the movie data of the user
    function addMovies() {
        // getting the value inside the input and get the movies entered by user
        var nameOfMovie = document.getElementById("nameOfMovie").value;

        //movie type
        var selectTag = document.getElementById('threeMovieType');
        var optionTag = selectTag.options[selectTag.selectedIndex]; // gets the selected index and gets one of the movie type
        var movieType = optionTag.value // grabs the specific movie type

        //genre type
        var selectTag = document.getElementById('genreType');
        var optionTag = selectTag.options[selectTag.selectedIndex];
        var genreType = optionTag.value        

        // using AJAX to send the data to the  server through JQuary concept  
        var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server    
        //defines a function to be executed when the readyState property changes
        xhttp.onreadystatechange = function () { //callback function, when the request is done run this code
            if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest          
                getMovies("all");
            }
        }
        xhttp.open("POST", "/addMovie", true); //Send a Request To a Server
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.send("movieType=" + movieType + "&" + "movieName=" + nameOfMovie + "&" + "genre=" + genreType);
    }