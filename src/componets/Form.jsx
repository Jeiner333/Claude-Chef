export default function Form({ exportIngredient }) {
    const add_ingredient = (FormData) => {
        const new_ingredient = FormData.get("new_ingredient");
        exportIngredient(new_ingredient);
    };

    return (
        <section className="app-section">
            <form action={add_ingredient} className="app-section-form">
                <input
                    className="form-text"
                    type="text"
                    name="new_ingredient"
                    id=""
                    placeholder="e.g. Oregano"
                />
                <button className="form-button">+ Add Ingredient</button>
            </form>
        </section>
    );
}
