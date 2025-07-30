import Header from "./componets/Header";
import Form from "./componets/Form";
import IngredientList from "./componets/IngredientList";
import Recipe from "./componets/Recipe";
import { getRecipeFromGemini } from "./ai"
import Footer from "./componets/Footer";

import { useState } from "react";

export default function App() {
    const [ingredientList, setIngredientList] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState(null)
    const [firstRecipe, setFirstRecipe] = useState(true)

    async function getRecipe() {
        setRecipe("### Preparing...")
        setRecipeShown(true)
        firstRecipe && setFirstRecipe(false)
        const recipeMarkdown = await getRecipeFromGemini(ingredientList)
        setRecipe(recipeMarkdown)
    }

    const deleteIngredient = (indexToDelete) => {
        setIngredientList((prevIngredientList) => {
            return prevIngredientList.filter(
                (_, index) => index !== indexToDelete
            );
        });
    };

    const handleAddIngredient = (ingredient) => {
        if (ingredient != "") {
            setIngredientList([...ingredientList, ingredient]);
        }
    };

    return (
        <main className="app">
            <Header />
            <main className="app-main">
                <Form exportIngredient={handleAddIngredient} />
                <IngredientList
                    ingredients={ingredientList}
                    deleteIngredient={deleteIngredient}
                    setRecipeShown={setRecipeShown}
                    getRecipe={getRecipe}
                    firstRecipe={firstRecipe}
                />
                {recipeShown && <Recipe markdownText={recipe}/>}
            </main>
            <Footer/>
        </main>
    );
}
