var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/"; //T13

async function tobbPontos() {
    try {
        const client = MongoClient.connect(url);
        const db = (await client).db("t13");
        const collection = db.collection("Fifa");

        const eredmeny = await collection.find({ Pontszam: { $gt: 1600 } }, { projection: { _id: 0, Csapat: 1, Pontszam: 1 } }).toArray();

        console.log("1600 pontnál többet szerzett csapatok listája:", eredmeny);
        (await client).close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása közben.", err);
    }
}

tobbPontos();