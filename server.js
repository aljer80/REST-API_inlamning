const express = require("express");
const app = express();
const fs = require("fs"); 
app.use(express.json());

// GET-anrop alla spelare
app.get("/api/players", (req, res) =>{

    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);

    if (players && players.length > 0){
        res.status(200).send(players);
    }else{
        res.status(404).send();
    }
});


// POST-anrop
app.post("/api/players", (req, res) => {

    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const player = req.body;
    player.id = players.length +1;
    players.push(player);

    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
        if (err) {
            res.status(400).send();
        } else{
             res.status(200).json(player);         //skickar tillbaka det skapade objektet
        }
    });
});
    

//PUT-anrop
app.put("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const player = req.body;        //kommer från frontEnd
    const existingPlayer = players.find(player => player.id === parseInt(req.params.id));
    existingPlayer.id = player.id;  //vill ha med id, men skulle programmera så att inte vem som helst kan ändra (i fortsättningen)
    existingPlayer.side = player.side;
    existingPlayer.gender = player.gender;
    existingPlayer.level = player.level;

    if (!player) {
        res.status(400).send("Bad request.");
    } else {
        fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
            if (err) {
                res.status(500).send();
            } else {
                 res.status(200).send(existingPlayer);
            }
        });
    }
});


  //DELETE-anrop
app.delete("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const id = req.params.id; 

    if (players.find(player => player.id === parseInt(req.params.id))) {
    players.splice(id-1, 1);
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



//För VG
  app.get("/api/players/:id", (req, res) => {
    res.status(200).send("Här är en specifik spelare med id " + req.params.id);

});

//Api ska svara med 404 om datan saknas

app.listen(3000, () => console.log("Server is up and running"));