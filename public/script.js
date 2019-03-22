function loadDoc() {
    var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server
    console.log("This project is working");
    //defines a function to be executed when the readyState property changes
    xhttp.onreadystatechange = function ()
    {
        console.log("in the callback function");
        
        if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest
            console.log("this is the response text" + this.responseText);

            let html = "<ul>";
                var movieData = JSON.parse(this.responseText); // turns into js object
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
    //https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp -has a good explanation
    xhttp.open("GET", "/movieType", true);  //Send a Request To a Server
    xhttp.send();
}