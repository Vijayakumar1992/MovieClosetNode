function loadDoc() {
    var xhttp = new XMLHttpRequest(); // create the XMLHttpRequest request & exchange data with a server
    console.log("This project is working");
    //defines a function to be executed when the readyState property changes
    xhttp.onreadystatechange = function () {
        console.log("in the callback function");
        if (this.readyState == 4 && this.status == 200) { // readyState/Status-holds the status of the XMLHttpRequest

            test(JSON.parse(this.responseText));
            console.log("this is the response text" + this.responseText);
        }
    };
    //https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp -has a good explanation
    xhttp.open("GET", "/movieType", true);  //Send a Request To a Server
    xhttp.send();
}

let htmlPage = "";

//+= is same as x += 10 [ x = x + 10] 

function test(response) {
    let length = response.length
    
    for (let i = 0; i < length; ++i) {  
        htmlPage += "<p>" + response[i].type + "</p>" // add on it 
    }
    document.getElementById("p").innerHTML = htmlPage;
    console.log("were in test" + htmlPage);  //
}