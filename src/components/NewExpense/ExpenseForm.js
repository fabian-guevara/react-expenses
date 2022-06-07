import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangedHandler = ({ target }) => {
        setEnteredTitle(target.value)
    }
      const amountChangedHandler = ({ target }) => {
        setEnteredAmount(target.value)
    }
      const dateChangedHandler = ({ target }) => {
        setEnteredDate(target.value)
    }

    return <form action="">
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangedHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangedHandler}  />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;