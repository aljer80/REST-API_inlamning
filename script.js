function renderData(data){
    let span = document.getElementById("span");
    span.innerText = null;
// visar input i en container på webbsidan 
    data.forEach(player => {
        span.innerText = span.innerText + "Player id: " + player.id + "\r\n";
        span.innerText = span.innerText + " Side: " + player.side + "\r\n";
        span.innerText = span.innerText + " Gender: " + player.gender + "\r\n";
        span.innerText = span.innerText + " Level: " + player.level + "\r\n";
    });
}

function displayMessages(message) {
    let span = document.getElementById("span");
    span.innerText = null;
    span.innerText = message;   //skriver ut en sträng
    //används till put, delete, post och felmeddelanden
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
        displayMessages(error);  
    }
}

//the function for post
function apiPost() {
    //picking up and creating the "profile" to pass to the promise
    let gender = document.getElementById("gender");
    let side = document.getElementById("side");
    let level = document.getElementById("level");

    profile = {
        "gender":gender.options[gender.selectedIndex].innerText,
        "side" :side.value,
        "level":level.value
    }
console.log(gender.options[gender.selectedIndex])
    //creating internal data
    const formData = new FormData();
    //formData.append('id', profile.id);
    formData.append('gender', profile.gender);
    formData.append('side', profile.side);
    formData.append('level', profile.level);
    
    return fetch('http://localhost:3000/api/players', {
        method: 'POST',
        body: formData
    }).then(response => response.json());
}


function apiPut() {
    //picking up and creating the "profile" to pass to the promise
    let gender = document.getElementById("gender");
    let side = document.getElementById("side");
    let level = document.getElementById("level");

    profile = {
        //samma id som i delete behövs här
        "gender":gender.options[gender.selectedIndex].innerText,
        "side" :side.value,
        "level":level.value
    }
console.log(gender.options[gender.selectedIndex])
    //creating internal data
    const formData = new FormData();
    //formData.append('id', profile.id);
    formData.append('gender', profile.gender);
    formData.append('side', profile.side);
    formData.append('level', profile.level);
    
    return fetch('http://localhost:3000/api/players', {
        method: 'PUT',
        body: formData
    }).then(response => response.json());

}   


function apiDelete() {
    //picking up and creating the "profile" to pass to the promise
    let id = document.getElementById("id");
    
    return fetch('http://localhost:3000/api/players/' + id, {
        method: 'DELETE'
    }).then(response => response.json());

}    

 
