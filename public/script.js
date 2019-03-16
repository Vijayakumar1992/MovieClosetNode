function loadDoc() {
    var xhttp = new XMLHttpRequest();
    console.log("This project is working");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            test(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", "/movieType", true);
    xhttp.send();
}

let htmlPage = "";

//if num = i++

//++i i++

function test(response) {
    let length = response.length
    for (let i = 0; i < length; ++i) {  
        htmlPage += "<p>" + response[i].type + "</p>" // add on it 
    }
    document.getElementById("p").innerHTML = htmlPage;  //
}