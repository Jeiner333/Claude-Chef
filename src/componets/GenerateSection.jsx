export default function GenerateSection({
    setRecipeShown,
    getRecipe,
    firstRecipe,
}) {

    const handleClick = () => {
        getRecipe();
    };

    return (
        <section className="app-main-generateSection">
            <div className="generateSection-div">
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={handleClick} className="generateSection-button">
                {firstRecipe ? "Get a Recipe" : "Get a new recipe"}
            </button>
        </section>
    );
}
