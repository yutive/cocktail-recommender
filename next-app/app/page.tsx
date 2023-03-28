export default async function Home() {
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {next: {revalidate:0}})
    const res = await data.json()

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-md mx-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src={res.drinks[0].strDrinkThumb}
                             alt="Modern building architecture"/>
                    </div>
                <div className="p-8 bg-neutral-700">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {res.drinks[0].strAlcoholic}
                    </div>
                    <a href="#" className="block mt-1 text-lg text-white leading-tight font-medium text-black hover:underline">{res.drinks[0].strDrink}</a>
                    <p className="mt-2 text-slate-200">
                        {res.drinks[0].strInstructionsDE}
                    </p>
                </div>
              </div>
            </div>
        </main>
    )
}