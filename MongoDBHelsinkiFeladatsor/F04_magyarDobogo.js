var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/";

async function MagyarDobogo() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13");
        const collection = db.collection("Helsinki");

        const dobogok = await collection.find({ helyezes: { $lte: 3 } }).toArray();

        console.log("A Magyar csapatok dobogós helyezései:", dobogok);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben!", err);
    }
}

MagyarDobogo();