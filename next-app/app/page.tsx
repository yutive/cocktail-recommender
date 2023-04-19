import Link from "next/link";

export default async function Home() {

    const data = await fetch('http://localhost:8080', {next: {revalidate: 0},cache: 'no-store'})
    const res = await data.json()

    // res.drinks[0].strDrinkThumb
    // res.drinks[0].strAlcoholic
    // res.drinks[0].strInstructionsDE
    // res.drinks[0].idDrink


    return (
        <main>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-20">
                <Link href={`/${res.drinks[0].idDrink}`}>
                    <div
                        className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 max-w-md mx-auto lg:mx-10 overflow-hidden md:max-w-2xl rounded-2xl shadow-lg bg-neutral-700 m-10 mt-28 lg:mt-10 hover:shadow-2xl">
                        <img className="rounded-2xl object-cover" alt="Cocktail" src={res.drinks[0].strDrinkThumb}/>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                {res.drinks[0].strAlcoholic}
                            </div>
                            <p className="text-xl mt-1 font-medium leading-tight text-white">
                                {res.drinks[0].strDrink}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/${res.drinks[1].idDrink}`}>
                    <div
                        className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 max-w-md mx-auto lg:mx-10 overflow-hidden md:max-w-2xl rounded-2xl shadow-lg bg-neutral-700 m-10 hover:shadow-2xl">
                        <img className="rounded-2xl object-cover" alt="Cocktail" src={res.drinks[1].strDrinkThumb}/>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                {res.drinks[1].strAlcoholic}
                            </div>
                            <p className="text-xl mt-1 font-medium leading-tight text-white">
                                {res.drinks[1].strDrink}
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href={`/${res.drinks[2].idDrink}`}>
                    <div
                        className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 max-w-md mx-auto lg:mx-10 overflow-hidden md:max-w-2xl rounded-2xl shadow-lg bg-neutral-700 m-10 hover:shadow-2xl">
                        <img className="rounded-2xl object-cover" alt="Cocktail" src={res.drinks[2].strDrinkThumb}/>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                {res.drinks[2].strAlcoholic}
                            </div>
                            <p className="text-xl mt-1 font-medium leading-tight text-white">
                                {res.drinks[2].strDrink}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

        </main>

    )
}