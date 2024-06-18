var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/";

async function pontozasiSorrend() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás!");
        const db = client.db("t13");
        const collection = db.collection("Fifa");

        const rendezesPontSzerintCsokkeno = { Pontszam: -1 };
        const eredmeny = await collection.find().sort(rendezesPontSzerintCsokkeno).toArray();

        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben.", err);
    }
}

pontozasiSorrend();