import React  from "react";
import Recipe from "./recipe";

import Ingredients from "./ingredients";
import {getRecipeFromQwen} from "../ai"
import MarkDown from "./markDown";
export default function MainContent(){
    
    const [ingredients,setIngredients]= React.useState(["Chicken","Dill","Rice","Oil"])
    const [recipeShown,setRecipeShown]=React.useState("")
    const recipeSection=React.useRef(null)

    React.useEffect(()=>{
        if(recipeShown!=="" && recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
        
    },[recipeShown])
    async function getRecipe(formData) {
        const command=formData.get("command")
        const recipeMarkDown=await getRecipeFromQwen(ingredients,command)
        
        setRecipeShown(recipeMarkDown)
        
        
    }
    //MAPPING INGREDIENTS ["Chicken","Oregano","Tomatoes"] INTO mapped VARIABLE
        
    function addIngredient(formData){
        
       const newIngredient=formData.get("ingredient")
       //SPREADING ARRAY ELEMENTS USING ... SO THAT OLD INGREDIENTS ALSO SHOW UP
       //PREV => OLD INGREDIENTS
        setIngredients(prev=>([...prev,newIngredient]))
        
        

    }
    
 
    
    return(
        
        <main>
            <div className="intro">
                
                <MarkDown/>
                
            
            </div>
            
            <form action={addIngredient}  className="add-ingredient-form" >
                <input type="text" aria-label="Add Ingredient"  placeholder="e.g. oregano" name="ingredient" />
                
                <button>+ Add Ingredient</button>
            </form>
            {ingredients.length>0 ?

            
                <Ingredients  
                ref={recipeSection}
                
                ingredients={ingredients}
                getRecipe={getRecipe}

            />

            :null}
            
            {recipeShown && 
            <div className="generated-recipe-container">

            <Recipe recipe={recipeShown}/> 

            </div>
            }
            
                
        </main>
        
    )
    
}