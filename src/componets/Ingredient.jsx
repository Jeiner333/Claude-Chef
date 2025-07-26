export default function Ingredient({ ingredient, index, deleteIngredient }) {
    return (
        <li className="ingredient" key={index}>
            {ingredient}
            <button
                onClick={() => deleteIngredient(index)}
                className="delete-button"
            >
                <img src="public/assets/trash-can.png" alt="Trash can icon" />
            </button>
        </li>
    );
}
