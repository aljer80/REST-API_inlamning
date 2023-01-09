# REST-API_inlamning

Titel:Player-API <br>
Beskrivning:Ett API som kan användas till padel. Det har CRUD-funktionalitet så man kan skapa spelare, hämta en eller alla spelare, uppdatera spelare och ta bort spelare. <br>

Krav som är uppfyllda: <br>
Projektet innehåller 1 endpoint som svarar på fyra metoder: GET, POST, PUT & DELETE. Endpointen kan nås via min requests.http_fil. <br>
All data är sparad i en JSON-fil. Datan i JSON-filen uppdateras då något läggs till, uppdateras eller tas bort. <br>
APIét svarar med 404 om datan saknas och har även lagt in andra passande responskoder. <br>
Git & GitHub har använts. <br>
Projektmappen innehåller en README.md fil.<br>
Uppgiften har lämnats in i tid. <br>

Krav för väl godkänt:<br>
Finns ytterligare en GET endpoint där det går att hämta ett specifikt objekt. <br>
Ett klient-gränssnitt för att anropa API:ets alla olika endpoints och presentera datan har byggts, men POST och PUT har problem att assigna värden via klient-gränssittet.  <br>


Info om hur projektet byggs och körs:<br>
	1. Klona ner projektet från Git (kopiera repots URL och följ instruktionerna: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) <br>
  2. Installera Express (skriv "npm istall Express" i terminalen).<br>
	3. Starta servern (skriv "npm start" i terminalen). <br>
  Nu är du igång! <br>
  Du behöver inte installera något paket för att avhjälpa CORS-problem, finns kod för det där det behövs. <br> 
  <br>
  
  Detta API har stöd för CRUP. I detta API kan du:<br>
  Skapa spelare,   <br>
  hämta alla spelare, eller  <br>
  hämta en specifik spelare,   <br>
  uppdatera spelare, och <br>
  ta bort spelare.   <br>
  
Endpoints:
localhost:3000/api/players/?id <br>

Endpointen stödjer följande metoder;<br>
Get, Put, Post, Delete<br>

Get<br>
Get används antingen ensamt eller i kombination med id för att hämta antingen alla, eller en specifik spelare. <br>

Post<br>
Post används i kombination med parametrarna kön, förmåga och hänthet. API:en sier till att ID automatiskt blir unikt genom att öka på maxvärdet med 1.<br>

Put<br>
Put funktionen tar emot parametrar för id, kön, nivå och hänthet. Om man försöker ändra en spelares id till ett id som redan är upptaget misslyckas anropet.<br>

Delete<br>
Delete tar emot en id parameter för att radera den spelaren ur databasen. <br>
<br>
Webbklienten använder sig av API för att utföra alla dessa funktioner. I webbklienten används select inputs för att välja parametrar istället för textfält. Webbklienten använder sig även av fetch-funktionaliteten för att göra anropen. GET, med och utan ID samt DELETE fungerar felfritt medan POST och PUT har problem att assigna värden. 
