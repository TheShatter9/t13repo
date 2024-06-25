const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/";//T13

async function uszasTornaKeres() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13");
        const collection = db.collection("Helsinki");

        const lekerdezesUszasTorna = await collection.find({
            sportag: {
                $in: ["uszas", "torna"]
            }
        }, { projection: { _id: 0, sportag: 1, versenyszam: 1 } }).toArray();
        console.log("Az úszás és a torna versenyszámai:", lekerdezesUszasTorna);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben!", err);
    }
}

uszasTornaKeres();