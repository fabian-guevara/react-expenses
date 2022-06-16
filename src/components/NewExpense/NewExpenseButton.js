import "./NewExpenseButton.css";

const NewExpenseButton = ({ onIsAdding }) => {
    return <button className="new-expense" onClick={() => onIsAdding(true)}> Add Expense </button>
}

export default NewExpenseButton;