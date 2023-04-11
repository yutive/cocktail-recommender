import Link from "next/link";

export default async function DrinkDetail({params}: { params: any }) {
    const {drink} = params
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`, {next: {revalidate: 0}})
    const res = await data.json()

    return (
        <main>
            <div className="flex flex-row items-center justify-center lg:mt-20">
                    <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl rounded-2xl shadow-lg bg-neutral-700 m-10 mt-28 lg:mt-10 hover:shadow-2xl">
                        <img className="rounded-2xl object-cover" alt="Cocktail" src={res.drinks[0].strDrinkThumb}/>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                {res.drinks[0].strAlcoholic}
                            </div>
                            <p className="text-xl mt-1 font-semibold leading-tight text-white">
                                {res.drinks[0].strDrink}
                            </p>
                            <p className="mt-2 text-white text-lg ">
                                {res.drinks[0].strInstructions}
                            </p>
                        </div>
                    </div>
            </div>
        </main>
    )
}