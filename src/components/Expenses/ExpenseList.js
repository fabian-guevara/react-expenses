import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {

    if(expenses.length === 0) {
        return <p>No data found.</p>
    }

    return <div>
        { 
            expenses.map(expense => {
                        const { date, title, amount, id } = expense;
                        return   <ExpenseItem key={id} date={date} title={title} amount={amount} /> 
            }) 
        }
    </div>



}

export default ExpenseList;