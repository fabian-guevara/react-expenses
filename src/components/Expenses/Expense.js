import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "./../UI/Card";

const Expense = ({ expense }) => {
    const { date, title, amount } = expense;
    return (        
         <Card className="expenses">
             <ExpenseItem date={date} title={title} amount={amount} />
         </Card>
    );
}


export default Expense;