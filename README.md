# REST-API_inlamning

Inlämningsuppgift

Titel:Player-API
Beskrivning:Ett API som kan användas till padel. Det har CRUD-funktionalitet så man kan skapa spelare, hämta en eller alla spelare, uppdatera spelare och ta bort spelare. Man kan inte skriva över till redan existerande id. 

Krav som är uppfyllda: 
Projektet innehåller 1 endpoint som svarar på fyra metoder: GET, POST, PUT & DELETE. Endpointen kan nås via min requests.http_fil. 
All data är sparad i en JSON-fil. Datan i JSON-filen uppdateras då något läggs till, uppdateras eller tas bort. 
APIét svarar med 404 om datan saknas. 
Git & GitHub har använts. 
Projektmappen innehåller en README.md fil.
Uppgiften har lämnats in i tid. 

Krav för väl godkänt:
Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt. 


Alla punkter för godkänt är uppfyllda Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt

Info om hur projektet byggs och körs:

Inlämningsuppgift REST-API

I den här laborationen ska du individuellt skapa ett enklare REST-API i NodeJS med express. Då API:et skall har funktionalitet för CRUD skall det finnas 4 st endpoints inkluderat GET, DELETE, PUT och POST för en resurs. Varje endpoint skall utföra vad dess anropsmetod ämnar att utföra, dvs. POST för att lägga till, PUT för att uppdatera, GET för att hämta osv. GET anropet skall hämta alla objekt. Vad API:et hanterar för typ av resurs väljer du själva, det viktiga är att det finns minst 4 st egenskaper för ett objekt varav en egenskap är id. Projektet skall inte ha någon databas utan istället ha all data sparad i en JSON-fil. För att testa ert API rekommenderas du att använda VS Code tilläget REST Client.

Generera inte någon start-kod med någon form av generator (express-generator). Utan skriv all kod själva.

Läs noga igenom hela uppgiftsbeskrivningen innan du börjar.

Inlämning

För att bli godkänd på den här uppgiften MÅSTE du använda GIT och GitHub. Inlämningen sker som vanligt via läroplattformen där du ska zippa ihop din projektmapp. I din projektmapp ska det finnas (utöver all kod) en README.md fil. Den ska innehålla en titel, beskrivning av projektet, vilka krav som är uppfyllda, info om hur projektet byggs och körs. Kom ihåg att ta bort node_modules!!!

Krav för godkänt:

Krav för väl godkänt:

Alla punkter för godkänt är uppfyllda Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt

Tänk på innan du startar: Ska din resurs kunna hantera bilder? Ska du i så fall använda bilder som finns online eller ska användaren kunna ladda upp bilder?
