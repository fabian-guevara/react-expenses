import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expense = ({ expenses }) => {

    const [filterYear, setFilterYear] = useState("2020");

    const saveFilterHandler = (data) => {
        setFilterYear(data);
    }

    return (        
         <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={saveFilterHandler}/>
                {
                    expenses
                    // .filter(expense => expense.date.getFullYear() === parseInt(filterYear))
                    .map(expense => {
                        const { date, title, amount } = expense;
                        return   <ExpenseItem date={date} title={title} amount={amount} /> 
                    }) 
                }
            </Card>
         </div>
    );
}


export default Expense;