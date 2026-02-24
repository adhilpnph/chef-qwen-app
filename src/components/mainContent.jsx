import React  from "react";
import Recipe from "./recipe";

import Ingredients from "./ingredients";
import {getRecipeFromQwen} from "../ai"
import MarkDown from "./markDown";
export default function MainContent(){
    
    const [ingredients,setIngredients]= React.useState([])
    const [recipeShown,setRecipeShown]=React.useState("")
    const [loading,setLoading]=React.useState(false)
    const [error,setError]=React.useState(null)
    const recipeSection=React.useRef(null)
    const loadingRef=React.useRef(null)
    const errorRef=React.useRef(null)
    React.useEffect(()=>{
        if(recipeShown!=="" && recipeSection.current!==null){
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
        if(loading){
            loadingRef.current.scrollIntoView({behavior:"smooth"})
        }
        if(error){
            errorRef.current.scrollIntoView({behavior:"smooth"})
        }
    },[recipeShown,loading,error])
    async function getRecipe(formData) {
        try{
            setLoading(true)
            setRecipeShown("")   
            setError(null)
            
            const command=formData.get("command")

            const recipeMarkDown=await getRecipeFromQwen(ingredients,command)
        
            setRecipeShown(recipeMarkDown)
        }catch(err){
            setError("Sorry please try asking me again...")

        }finally{
            setLoading(false)
        }
        
        
        
    }
    
        
    function addIngredient(formData){
        
       const newIngredient=formData.get("ingredient")
       
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
            {loading && 
                <div ref={loadingRef} className="state-message">
                    <h3>Generating recipe...</h3>
                </div>
            }
            {error && 
                <div className="state-message">
                    <h3 ref={errorRef}>{error}</h3>
                </div>
            }
            {recipeShown && 
            <div className="generated-recipe-container">

            <Recipe recipe={recipeShown}/> 

            </div>
            }
            
                
        </main>
        
    )
    
}