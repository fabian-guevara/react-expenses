import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react" ;
import NewExpenseButton from "./NewExpenseButton"
const NewExpense = ({ onAddExpense  }) => {
  const [ isAdding, setIsAdding ] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        onAddExpense(enteredExpenseData);
        setIsAdding(false)
    }

    const changeIsAdding = () => {
       setIsAdding(!isAdding)
    }

    return (
        <div className="new-expense">
            {
                isAdding ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} changeIsAdding={changeIsAdding} /> : <NewExpenseButton onIsAdding={changeIsAdding} />
            }
        </div>
    )
}

export default NewExpense;