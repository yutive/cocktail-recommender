const fetch = require("node-fetch");
const express = require("express");
const {status, send} = require("express/lib/response");
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://cocktail:cocktail@localhost:27017/';
const dbName = 'cocktail';
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    const drink0 = await getCocktail();
    const drink1 = await getCocktail();
    const drink2 = await getCocktail();
    const result = {
        drinks: [],
    };
    result.drinks = drink0.drinks.concat(drink1.drinks).concat(drink2.drinks);
    res.json(result);
});

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log(`API is running at at http://localhost:${port}`);
});

async function getCocktail() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const data = await response.json();
    await saveIdInHistory()
    return await data;
}

function saveIdInHistory() {
    const client = new MongoClient(url, {useUnifiedTopology: true});
    client.connect(function (err) {
        if (err) {
            console.error(err);
            status(500).send('Failed to connect to MongoDB');
            return;
        }
        console.log('Connected successfully to server');
        const db = client.db(dbName);

        // Get the collection
        const collection = db.collection('cocktail');

        // Insert the string
        collection.insertOne({message: "lol"}, function (err, result) {
            if (err) {
                console.error(err);
                res.status(500).send('Failed to insert document into collection');
                return;
            }

            console.log(`Inserted ${result.insertedCount} document into the collection`);

            // Close the client
            client.close();

            // Send a success response
            send('String inserted successfully');
        });
    });
}