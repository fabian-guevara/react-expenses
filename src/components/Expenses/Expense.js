import './Expense.css'
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import { useState } from "react";
const Expense = ({ expenses }) => {

    const [filterYear, setFilterYear] = useState("2020");

    const saveFilterHandler = (data) => {
        setFilterYear(data);
    }

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(filterYear));

    return (        
         <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={saveFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card>
         </div>
    );
}


export default Expense;