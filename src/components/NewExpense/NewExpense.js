import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        onAddExpense(enteredExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;