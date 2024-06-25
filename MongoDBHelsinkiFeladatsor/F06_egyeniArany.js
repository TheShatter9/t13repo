var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/";

async function egyeniArany() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13");
        const collection = db.collection("Helsinki");

        const eredmeny = await collection.find({
            $and: [
                { csapatMeret: { $lte: 1 } },
                { helyezes: { $lte: 1 } }
            ]
        }, { projection: { _id: 0, sportag: 1, versenyszam: 1 } }).toArray();

        console.log("Az egyéniben szerzett aranyak sportágai: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben.", err)
    }
}

egyeniArany();