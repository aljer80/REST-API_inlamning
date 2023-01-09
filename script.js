function renderData(data){
    let span = document.getElementById("span");
    span.innerText = null;
// visar input i en container på webbsidan 
    //span.innerText = data; 
    data.forEach(player => {
        span.innerText = span.innerText + "Player id: " + player.id + "\r\n";
        span.innerText = span.innerText + " Side: " + player.side + "\r\n";
        span.innerText = span.innerText + " Gender: " + player.gender + "\r\n";
        span.innerText = span.innerText + " Level: " + player.level + "\r\n";
    });
    
}

async function apiGet() {
    try {
        let id = document.getElementById("id");
        if (id.value != "")
        {
            let response = await fetch("http://localhost:3000/api/players/" + id.value);
            let data = await response.json();
            renderData([data]);
        } else {
            let response = await fetch("http://localhost:3000/api/players");
            let data = await response.json();
            renderData(data);
        }
    } catch (error) {
        renderData(error);  
    }
}


function apiPost() {
    let https = require('https');
    let req = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/players'
    }; 

    let side = document.getElementById("side");
    let gender = document.getElementById("gender");
    let level = document.getElementById("level");

    req.method = "POST";
    req.body = {
        "side": side,
        "gender":gender,
        "level" :level
    } 

    req = https.request(req, res => {
        res.on("data", d => {
        renderData(d);
        });
    }); 
}


function apiPut() {
    req.path = req.path + "/" + id;

    
}


function apiDelete() {
    fetch("http://localhost:3000/api/players/2")
    .then((response) => response.json())
    .then((data) => {
        renderData();    
    })
    .catch(function (err) {
        renderData(); 
    });
}
 
