// C:\Users\david\Desktop\BYUI\WINTER 2019\CS313\MovieCloset -- folder path(type cd)
// link:  http://localhost:5000/index.html


// need to do ajax to make  the page load
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// looks into public folder & posts the html file on web. 
app.use(express.static("public"));
app.use(express.json());  // support Json enbeded bodies
app.use(express.urlencoded({extended: true})); //supports utl encoded bodies

const controller = require("./movieController/movieController.js")

app.get("/getMovies", controller.getMovies) // endpoints
app.post("/addMovie", controller.addMovies) // second endpoints
app.post("/deleteMovies", controller.deleteMovies)
app.get("/editMovies", controller.editMovies)




app.listen(port, function () {
    console.log("Listening on port: " + port)
});