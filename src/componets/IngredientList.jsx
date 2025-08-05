import Ingredient from "./Ingredient";
import GenerateSection from "./GenerateSection";

export default function Ingredients({
    ingredients,
    deleteIngredient,
    setRecipeShown,
    getRecipe,
    firstRecipe
}) {
    const ingredientsList = () => {
        return ingredients.map((item, index) => {
            return (
                <Ingredient
                    ingredient={item}
                    key={index}
                    index={index}
                    deleteIngredient={deleteIngredient}
                />
            );
        });
    };

    return (
        <>
            {ingredients.length > 0 ? (
                <>
                    <section className="app-main-ingredients">
                        <header>
                            <h2>Ingredients on hand:</h2>
                        </header>
                        <main>
                            <ul className="ingredients-list">
                                {ingredientsList()}
                            </ul>
                        </main>
                    </section>

                    {ingredients.length >= 3 ? (
                        <GenerateSection setRecipeShown={setRecipeShown} getRecipe={getRecipe} firstRecipe={firstRecipe} />
                    ) : (
                        <h2>Add 3 or more ingredients for get a recipe!</h2>
                    )}
                </>
            ) : (
                <section className="app-main-ingredients2">
                    <header>
                        <h2>
                            Add some ingredients for making a recipe with IA
                            power!
                        </h2>
                    </header>
                </section>
            )}
        </>
    );

    return null;
}
