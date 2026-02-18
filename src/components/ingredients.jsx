export default function Ingredients(props){
    
    const mapped= props.ingredients.map(
            ing=> (<li key={ing}>{ing}</li>)
        )

    return(
        
         <section className="ingredients-section">
                <h2>Ingredients on hand:</h2>
                <ul>
                    {mapped}
                </ul>

                
                
                {props.ingredients.length>3 && <div className="get-a-recipe-container">
                    <div ref={props.ref}>
                        <h3 className="recipe-container-title">Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <form className="get-recipe-form" action={props.getRecipe}>
                        <input placeholder="How to make majbous" type="text" name="command" id="command" />
                        <button >Get a recipe</button>
                    </form>
                    
                    
                </div>}
                
        </section>
        
        
        
    )

}