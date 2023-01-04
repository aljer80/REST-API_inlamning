const express = require("express");
const app = express();
const fs = require("fs"); 
app.use(express.json());

//const { uuid } = require('uuidv4');               //från Saras kod. För själva id-grejen

// GET-anrop alla spelare
app.get("/api/players", (req, res) => {

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

/* Ursprungligt POST-anrop
app.post("/api/players", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    
    const player = req.body; 
    //player.id = uuid();                           //från Saras kod
    players.push(player);
    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err) {
        if(err){
            res.status(400).send();
            }else{
                res.status(201).json(req.body);
                
            }
    });
     
  });
*/    

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

/* ursprungligt PUT-anrop
app.put("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const player = req.body;
    
    const existingPlayer = players.find(player => player.id === parseInt(req.params.id));
    existingPlayer.side  = player.side;
    existingPlayer.gender = player.gender;
    existingPlayer.level =player.level;
    
    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err) {
        if(err){
            res.status(400).send();
            }else{
                res.status(200).json(req.body);
            }
    });
});
*/

  //DELETE-anrop
  app.delete("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const existingPlayer = players.find(player => player.id === parseInt(req.params.id));
    const index = players.indexOf(existingPlayer);

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

/* 
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
  */

//GET-anrop för spelare med specifikt id
app.get("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const getPlayerById = players.find(player => player.id === parseInt(req.params.id))

    if(getPlayerById) {
        res.status(200).send(getPlayerById);
        } else {
            res.status(404).send("The player with the given ID was not found.");
        }
});


/*För VG
app.get("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const id = req.params.id; 
    if (id) {
        res.status(200).send("You requested the player with ID " + req.params.id);
    }else{
        res.status(404).send("The player with the given ID was not found.");
    }
});

Get.anrop för spelare med specifikt id 
  app.get("/api/players/:id", (req, res) => {
    const data = fs.readFileSync("players.json");
    const players = JSON.parse(data);
    const getPlayerById = players.find(player => player.id === parseInt(req.params.id));

        if(!getPlayerById){
            res.status(404).send();
        }else{
                res.status(200).send(getPlayerById);
             }
    });

*/

app.listen(3000, () => console.log("Server is up and running"));