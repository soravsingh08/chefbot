import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

      function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }  

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                { ingredients.length > 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>
                }
            </section>}

            { recipeShown && <section className="recipe">
        <h2>Chef's Special Pasta Recipe</h2>
        <ol>
            <li>Boil water and cook the pasta until al dente.</li>
            <li>In a separate pan, brown the ground beef.</li>
            <li>Add all the main spices and stir well.</li>
            <li>Mix in the tomato paste and simmer for 10 minutes.</li>
            <li>Combine pasta with the sauce and serve hot.</li>
        </ol>
    </section>}
            
        </main>
    )
}