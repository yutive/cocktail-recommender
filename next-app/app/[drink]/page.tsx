import Link from "next/link";

export default async function DrinkDetail({params}: { params: any }) {
    const {drink} = params
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`, {next: {revalidate: 0}})
    const res = await data.json()

    return (
        <main>
            <div className="flex flex-row items-center justify-center lg:mt-20">
                    <div className="max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-lg bg-neutral-700 m-10 mt-28 lg:mt-10 hover:shadow-2xl">
                        <img className="rounded-2xl object-cover" alt="Cocktail" src={res.drinks[0].strDrinkThumb}/>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                {res.drinks[0].strAlcoholic}
                            </div>
                            <p className="text-3xl mt-1 font-semibold leading-tight text-white">
                                {res.drinks[0].strDrink}
                            </p>
                            <p className="mt-2 text-white text-lg ">
                                {res.drinks[0].strInstructions}
                            </p>
                            <div>
                                <p className="mt-2 text-white text-lg font-bold">Ingredients:</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient1}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient2}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient3}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient4}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient5}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient6}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient7}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient8}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient9}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient10}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient11}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient12}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient13}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient14}</p>
                                <p className="text-white text-lg">{res.drinks[0].strIngredient15}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    )
}