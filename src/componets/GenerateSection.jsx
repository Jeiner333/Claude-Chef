export default function GenerateSection({ setRecipeShown, getRecipe }) {
    const handleClick = () => {
        getRecipe()
    };

    return (
        <section className="app-main-generateSection">
            <div className="generateSection-div">
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={handleClick} className="generateSection-button">
                Get a recipe
            </button>
        </section>
    );
}
