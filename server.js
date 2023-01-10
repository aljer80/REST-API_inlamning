let express = require("express");
let app = express();
let fs = require("fs"); 
app.use(express.json());

app.use(express.static("public"));

const data = fs.readFileSync("players.json");

// GET-anrop alla spelare
app.get("/api/players", (req, res) => {
    let players = JSON.parse(data);

    if (players && players.length > 0){
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).send(players);
    }else{
        res.set('Access-Control-Allow-Origin', '*');
        res.status(404).send();
    }
});


// POST-anrop
app.post("/api/players", (req, res) => {

    let players = JSON.parse(data);
    let player = req.body;
    let values = [];
    players.forEach(player => {
        values.push(player.id);
    });
    
    player.id = Math.max.apply(Math, values) + 1; 
        
    players.push(player);   //knuffar in player i players

    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
        if (err) {
            res.set('Access-Control-Allow-Origin', '*');
            res.status(400).send();
        } else{
            res.set('Access-Control-Allow-Origin', '*');
            res.status(200).json(player);   //skickar tillbaka det skapade objektet
        }
    });
});


//PUT-anrop
//kan lägga till validering. Kolla om id är en integer, om inte: felmeddelande. Om det är en int. gå vidare.
app.put("/api/players/:id", (req, res) => {
    let players = JSON.parse(data);
    let player = req.body;    //kommer från frontEnd
    index = players.findIndex(player => player.id === parseInt(req.params.id));
    exists = players.find(player => player.id === parseInt(req.body.id));   //player.id från req body tilldelas exists. 

    if (exists) {   //"om "personnumret" redan finns får du inte ändra"
        res.set('Access-Control-Allow-Origin', '*');
        res.status(400).send("Bad request.");   
    } else {
        players[index] = player;
        fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
            if (err) {
                res.set('Access-Control-Allow-Origin', '*');
                res.status(500).send();
            } else {
                res.set('Access-Control-Allow-Origin', '*');
                res.status(200).send("Jag har lyckats, grattis!"); //när du gör en put får du tillbaka
                //res.status(200).send(players[index]); //när du gör en put får du tillbaka ändringen, så som den står i databasen
            }
        });
    }
});


//index = players.findIndex(player => player.id === parseInt(req.params.id));
//exists = players.find(player => player.id === parseInt(req.body.id)); 

//DELETE-anrop
app.delete("/api/players/:id", (req, res) => {
    
    let players = JSON.parse(data);
    let existingPlayer = players.find(player => player.id === parseInt(req.params.id));
    let index = players.indexOf(existingPlayer);

    if (players.find(player => player.id === parseInt(req.params.id))) {
    players.splice(index, 1);
    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
        if (err) {
            res.status(500).send();
        } else {
            res.status(200).send("Player deleted");
        }
    });
    } else {
        res.status(404).send('The player with the given ID was not found.');
    }
});
  

//GET-anrop för spelare med specifikt id
app.get("/api/players/:id", (req, res) => {
    let data = fs.readFileSync("players.json");
    let players = JSON.parse(data);
    let player = players.find(player => player.id === parseInt(req.params.id))

    if(player) {
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).send(player);
        } else {
            res.set('Access-Control-Allow-Origin', '*');
            res.status(404).send("The player with the given ID was not found.");
        }
});


app.listen(3000, () => console.log("Server is up and running"));