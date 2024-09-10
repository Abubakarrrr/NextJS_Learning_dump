import RecpieDetailsItems from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function RecipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params.details);
  return <RecpieDetailsItems getRecipeDetails={getRecipeDetails} />;
}
