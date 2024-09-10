import Link from "next/link";
export default function RecpieDetailsItems({ getRecipeDetails }) {
  return (
    <div>
      <Link href={"/recipe-list"}>
        <button class="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Go to recipe list
        </button>
      </Link>
      <div className="mx-auto max-w-2xl p-6 lg:max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="top-0 w-full gap-2 sm:flex lg:sticky">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
            ></img>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {getRecipeDetails?.name}
            </h2>
            <div className="mt-5 flex flex-wrap gap-4">
              <p className="text-2xl text-gray-600">
                {getRecipeDetails?.mealType}
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-400">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="mt-4 list-disc space-y-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
