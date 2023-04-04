import Link from "next/link";

export default async function Home() {

    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {next: {revalidate: 0}})
    const res = await data.json()
    const data1 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {next: {revalidate: 0}})
    const res1 = await data1.json()
    const data2 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {next: {revalidate: 0}})
    const res2 = await data2.json()



    // res.drinks[0].strDrinkThumb
    // res.drinks[0].strAlcoholic
    // res.drinks[0].strInstructionsDE
    // res.drinks[0].idDrink


    return (
        <main>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:h-screen">
                <Link href={`/${res.drinks[0].idDrink}`}>
                    <div className="rounded-2xl shadow-lg bg-neutral-700 m-10 mt-28 lg:mt-10 hover:shadow-2xl">
                        <img className="h-1/3 w-full rounded-2xl object-cover" src={res.drinks[0].strDrinkThumb}
                             alt="Mountain"/>
                        <div className="p-8">
                            <div
                                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{res.drinks[0].strAlcoholic}
                            </div>
                            <p
                               className="text-xl mt-1 font-medium leading-tight text-white hover:underline">{res.drinks[0].strDrink}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/${res1.drinks[0].idDrink}`}>
                    <div className="rounded-2xl shadow-lg bg-neutral-700 m-10 mt-10 hover:shadow-2xl">
                        <img className="h-1/3 w-full rounded-2xl object-cover" src={res1.drinks[0].strDrinkThumb}
                             alt="Mountain"/>
                        <div className="p-8">
                            <div
                                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{res1.drinks[0].strAlcoholic}
                            </div>
                            <p
                               className="text-xl mt-1 font-medium leading-tight text-white hover:underline">{res1.drinks[0].strDrink}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/${res2.drinks[0].idDrink}`}>
                    <div className="rounded-2xl shadow-lg bg-neutral-700 m-10 mt-10 hover:shadow-2xl">
                        <img className="h-1/3 w-full rounded-2xl object-cover" src={res2.drinks[0].strDrinkThumb}
                             alt="Mountain"/>
                        <div className="p-8">
                            <div
                                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{res2.drinks[0].strAlcoholic}
                            </div>
                            <p
                               className="text-xl mt-1 font-medium leading-tight text-white hover:underline">{res2.drinks[0].strDrink}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

        </main>

    )
}