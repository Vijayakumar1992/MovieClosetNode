// C:\Users\david\Desktop\BYUI\WINTER 2019\CS313\MovieCloset -- folder path(type cd)
// link:  http://localhost:5000/movieType

// need to do ajax to make  the page load
const express = require("express");
const app = express();

const port = process.env.PORT || 5000; 

// looks into public folder & posts the html file on web. 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded()); //node express get node data

const controller = require ("./movieController/movieController.js")

app.get("/getMovies", controller.getMovies) // endpoints
//app.get("/searchMovie", controller.searchMovieType) // second endpoints
//app.post("/addMovie", controller.addMovie) // third endpoints



app.listen(port, function () {
    console.log("Listening on port: " + port)
});