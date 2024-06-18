var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/";

async function kollekcioLetrehozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13");
        await db.createCollection("Fifa");
        console.log("A mintakollekció a T13 adatbázisában létrejött.");
        client.close();
    }
    catch (err) {
        console.log("Hiba történt a kollekció létrehozása során:", err);
    }
}
kollekcioLetrehozas();