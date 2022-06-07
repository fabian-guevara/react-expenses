
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
const expenses = [
  {
    date: new Date(2022, 2, 28),
    title: "Beers",
    amount: 293
  },
   {
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: 293
  }, {
    date: new Date(1884, 2, 28),
    title: "Groceries",
    amount: 199
  }
]
function App() {
  return (
    <div className="App">
      <NewExpense />
      {
        expenses.map(expense => <Expense  expense={expense} />)
      }
    </div>
  );
}

export default App;
 