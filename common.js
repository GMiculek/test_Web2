var parsedUrl = new URL(window.location.href);

/*function query() {
    fetch("http://" + parsedUrl.host + "/query", {
        method: "GET",
        mode: "no-cors",
    })
    .then((resp) => resp.text())
    .then((data) => {
        document.getElementById("response").innerHTML = data;
    })
    .catch((err) => {
        console.log(err);
    })
}*/


function query() {
   
        //location.replace('https://gmiculek.github.io/test_Web2/funfacts.html');
		document.getElementById("response").className = "hi";
		

		
}

function return() {
   
        location.replace('https://gmiculek.github.io/test_Web2/index.html');
		

		
}