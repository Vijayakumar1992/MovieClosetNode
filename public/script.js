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


xhttp.open("POST", "/addMovie", true); //Send a Request To a Server
    xhttp.send(JSON);

function edit() {
    var txt;
    var movie = document.getElementById("movies").value; // will get the movies entered by user      
    var person = prompt("Edit the movie:", movie);
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "This week we will watch:" + person;
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
        txt = "This week we will watch:" + person;
    }
    document.getElementById("movieList").innerHTML = txt;
}

function addMovies() {
    document.getElementById("movieStylecss").style.display = "block";
    document.getElementById("movieList").style.display = "none"; //displays one box at a time    
}

//get the movie data
function addFunction() {
    // getting the value inside the input and get the movies entered by user
    var nameOfMovie = document.getElementById("nameOfMovie").value;
    var threeMovieType = document.getElementById("threeMovieType").value;
    var genreType = document.getElementById("genreType").value;

    // Convert a string written in JSON format, into a JavaScript object.
    var myJSON = '{nameType: nameOfMovie, movieName: threeMovieType, genre: genreType}';
    var myObj = JSON.parse(myJSON);
    document.getElementById("movieStylecss").innerHTML = myObj.name;

    // using AJAX to send the data to the  server through JQuary concept
    function postAjax(url, data, success) {
        var params = typeof data == 'string' ? data : Object.keys(data).map(
                function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
            ).join('&');
    
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open('POST', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(JSON);
        return xhr;

        
    }
}
    


        