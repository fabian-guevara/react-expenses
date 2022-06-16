import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData, changeIsAdding }) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangedHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
      const amountChangedHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
      const dateChangedHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {

        e.preventDefault();

        const expenseData = {
            title: enteredTitle, 
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        onSaveExpenseData(expenseData)
        setEnteredAmount("")
        setEnteredDate("")
        setEnteredTitle("")
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangedHandler} required />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedHandler}  />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" value={enteredDate} max="2022-12-31" onChange={dateChangedHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={changeIsAdding}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;