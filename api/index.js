const fetch = require("node-fetch")
const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get('/', async (req, res) => {
    const drink0 = await getCocktail()
    const drink1 = await getCocktail()
    const drink2 = await getCocktail()
    const result = {
        drinks: []
    };
    result.drinks = drink0.drinks.concat(drink1.drinks).concat(drink2.drinks)
    res.json(result);
});
app.listen(port, function (err) {
    if (err) console.log(err);
    console.log(`API is running at at http://localhost:${port}`);
});

async function getCocktail(){
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const data = await response.json()
    return await data
}

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongodb:1234@cluster0.holhjwu.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
