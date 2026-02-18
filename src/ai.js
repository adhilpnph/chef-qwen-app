export async function getRecipeFromQwen(ingredientsArray,command) {
    const response= await fetch("/api/recipe",{
        method:"POST",
        headers:{"Content-Type": "application/json" },
        body: JSON.stringify({ingredientsArray,command})
    });
    const data=await response.json()
    return data.recipe;
}