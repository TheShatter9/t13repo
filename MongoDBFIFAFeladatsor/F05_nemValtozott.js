var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://t13jcsm:123456asd@cluster0.tduc3ox.mongodb.net/"; //T13

async function nemValtozottHelyezes() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("t13");
        const collection = db.collection("Fifa");

        const eredmeny = await collection.find({
            $and: [{
                Valtozas: { $lt: 1 }
            },
            {
                Valtozas: { $gt: -1 }
            }]
        }, { projection: { _id: 0, Csapat: 1 } }).toArray();

        console.log("Az előző alkalom óta nem változott helyezésű csapatok: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.log("Hiba a művelet végrehajtása közben.", err)
    }
}

nemValtozottHelyezes();