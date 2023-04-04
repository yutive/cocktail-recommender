
export default async function DrinkDetail({params}:{params:any}){
    const {drink} = params
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`, {next: {revalidate: 0}})
    const res = await data.json()

    return(
        <main>
            <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className=" rounded-2xl  shadow-lg bg-neutral-700 m-10 mt-28">
                        <img className=" rounded-2xl object-cover" src={res.drinks[0].strDrinkThumb}
                             alt="Mountain"/>
                        <div className="p-8">
                            <div
                                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{res.drinks[0].strAlcoholic}
                            </div>
                            <p
                                className="text-xl font-medium leading-tight text-white">{res.drinks[0].strDrink}
                            </p>
                            <p
                                className="text-lg mt-3 font-medium leading-tight text-white">{res.drinks[0].strInstructionsDE}
                            </p>
                        </div>
                    </div>
            </div>

        </main>
    )
}