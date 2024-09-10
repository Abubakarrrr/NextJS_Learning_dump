import RecipeList from "@/components/recipe-list"

async function fetchListOfRecpies(){
    try {
         const response = await fetch('https://dummyjson.com/recipes')
         const data = await response.json()
         return data?.recipes
    } catch (error) {
         console.log(error);
    }
}

export default async function Recipes(){
    const recipeList = await fetchListOfRecpies()
    return (
        <RecipeList recipeList={recipeList}/>
    )
}