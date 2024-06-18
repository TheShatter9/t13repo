var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/"; //T13

async function legtobbetRontottLekerdezes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13");
        const collection = db.collection("Fifa");

        const eredmeny = await collection.find({ Valtozas: { $lte: -3 } },
            { projection: { _id: 0, Csapat: 1, Valtozas: 1 } }).toArray();

        console.log("A legtöbbet rontotta a korábbi évekhez képest:", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása közben.", err)
    }
}

legtobbetRontottLekerdezes();