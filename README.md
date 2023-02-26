# REST-API_inlamning

Titel:Player-API
Beskrivning:Ett API som kan användas till padel. Det har CRUD-funktionalitet så man kan skapa spelare, hämta en eller alla spelare, uppdatera spelare och ta bort spelare.

Krav som är uppfyllda:
Projektet innehåller 1 endpoint som svarar på fyra metoder: GET, POST, PUT & DELETE. Endpointen kan nås via min requests.http_fil.
All data är sparad i en JSON-fil. Datan i JSON-filen uppdateras då något läggs till, uppdateras eller tas bort.
APIét svarar med 404 om datan saknas och har även lagt in andra passande responskoder.
Git & GitHub har använts.
Projektmappen innehåller en README.md fil.
Uppgiften har lämnats in i tid.

Krav för väl godkänt:
Finns ytterligare en GET endpoint där det går att hämta ett specifikt objekt.
Ett klient-gränssnitt för att anropa API:ets alla olika endpoints och presentera datan har byggts, men POST och PUT har problem att assigna värden via klient-gränssittet.

Info om hur projektet byggs och körs:
1. Klona ner projektet från Git (kopiera repots URL och följ instruktionerna: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
2. Installera Express (skriv "npm istall Express" i terminalen).
3. Starta servern (skriv "npm start" i terminalen).
Nu är du igång!
Du behöver inte installera något paket för att avhjälpa CORS-problem, finns kod för det där det behövs.


Detta API har stöd för CRUP. I detta API kan du:
Skapa spelare,
hämta alla spelare, eller
hämta en specifik spelare,
uppdatera spelare, och
ta bort spelare.

Endpoints: localhost:3000/api/players/?id

Endpointen stödjer följande metoder;
Get, Post, Put, Delete

Get
Get används antingen ensamt eller i kombination med id för att hämta antingen alla, eller en specifik spelare.

Post
Post används i kombination med parametrarna kön, förmåga och hänthet. API:en sier till att ID automatiskt blir unikt genom att öka på maxvärdet med 1.

Put
Put funktionen tar emot parametrar för id, kön, nivå och hänthet. Om man försöker ändra en spelares id till ett id som redan är upptaget misslyckas anropet.

Delete
Delete tar emot en id parameter för att radera den spelaren ur databasen.

Webbklienten använder sig av API för att utföra alla dessa funktioner. I webbklienten används select inputs för att välja parametrar istället för textfält. Webbklienten använder sig även av fetch-funktionaliteten för att göra anropen. GET, med och utan ID samt DELETE fungerar felfritt medan POST och PUT har problem att assigna värden.