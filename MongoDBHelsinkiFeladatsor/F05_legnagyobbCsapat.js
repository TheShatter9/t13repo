var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/";

async function legnagyobbCsapat() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13");
        const collection = db.collection("Helsinki");

        const rendezesBeallitasa = { csapatMeret: -1 }

        const mennyiseg = await collection.find().sort(rendezesBeallitasa).limit(1).toArray();

        console.log(mennyiseg);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben.", err)
    }
}

legnagyobbCsapat();