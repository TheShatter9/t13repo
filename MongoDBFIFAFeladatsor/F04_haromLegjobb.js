var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/"; //T13

async function legjobbHarom() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás!");
        const db = client.db("t13");
        const collection = db.collection("Fifa");

        const rendezesLegjobbHarom = { Helyezes: 1 };
        const eredmeny = await collection.find().sort(rendezesLegjobbHarom).limit(3).toArray();

        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben.", err);
    }
}

legjobbHarom();