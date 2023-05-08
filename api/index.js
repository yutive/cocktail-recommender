const fetch = require("node-fetch");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

// connection to mongodb
mongoose.connect("mongodb://localhost/27017:27027", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Modell for cocktail-IDs
const cocktailSchema = new mongoose.Schema({
    id: String,
});
const Cocktail = mongoose.model("Cocktail", cocktailSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const drink0 = await getCocktail();
    const drink1 = await getCocktail();
    const drink2 = await getCocktail();

    // save Cocktail-IDs in  MongoDB
    const cocktailIDs = [
        new Cocktail({ id: drink0.drinks[0].idDrink }),
        new Cocktail({ id: drink1.drinks[0].idDrink }),
        new Cocktail({ id: drink2.drinks[0].idDrink }),
    ];
    await Cocktail.insertMany(cocktailIDs);

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
    const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    return await data;
}