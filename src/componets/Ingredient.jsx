import trash_icon from '/public/assets/trash-can.png'

export default function Ingredient({ ingredient, key, deleteIngredient }) {
    return (
        <li className="ingredient" key={key}>
            {ingredient}
            <button
                onClick={() => deleteIngredient(index)}
                className="delete-button"
            >
                <img src={trash_icon} alt="Trash can icon" />
            </button>
        </li>
    );
}
