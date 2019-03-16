function getMovieType(request, response) {
    const movieResults = [
        // we will send json data to the client 
        // build a database query -- select, from, where
        {
            id: 1,
            type: "Coco"
        },
        {
            id: 2,
            type: "Dangal"
        },
        {
            id: 3,
            type: "Nanban"
        },
    ];
    response.json(movieResults);
}

// tell them what function we are gonna use
module.exports = {   
    getMovieType: getMovieType
}