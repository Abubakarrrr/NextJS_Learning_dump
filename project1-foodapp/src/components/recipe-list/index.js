import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  // console.log(recipeList);
  return (
    <div>
      <div className="mx-auto p-4 sm:max-w-full md:max-w-4xl lg:max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">Recipes</h2>
        <Link href={'/'}><button class="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Go home
        </button></Link>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="cursor-pointer overflow-hidden rounded-md bg-white shadow-md transition-all hover:scale-[1.1]">
                      <div className="aspect-w-16 aspect-h-8 w-full lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        ></img>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <p className="text-lg text-gray-600">Rating: {recipe.rating}</p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold">{recipe.cuisine}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
