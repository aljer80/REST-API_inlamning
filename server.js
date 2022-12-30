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
    //let newPlayer = { "id": "players.length" + 1, "side": "backhand", "gender": "female", "level": "intermediated"}
    const player = req.body;
    players.push(player);

    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
        if (err) {
            res.status(400).send();
        } else{
             res.status(201).json(req.body);
        }
    });
});
    

//PUT-anrop
app.put("/api/players/:id", (req, res) => {
    res.status(200).json(req.body);
  });

  //DELETE-anrop
app.delete("/api/players/:id", (req, res) => {
    res.status(200).json(req.body);
  });


//För VG
  app.get("/api/players/:id", (req, res) => {
    res.status(200).send("Här är en specifik spelare med id " + req.params.id);

});

//Api ska svara med 404 om datan saknas

app.listen(3000, () => console.log("Server is up and running"));