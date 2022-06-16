
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const DUMMY_DATA = [
  {
    id: "001",
    date: new Date(2022, 2, 28),
    title: "Beers",
    amount: 293
  },
   {
    id: "002",
    date: new Date(2021, 2, 28),
    title: "Car insurance",
    amount: 293
  }, {
    id: "003",
    date: new Date(1884, 2, 28),
    title: "Groceries",
    amount: 199
  },
  {
    id: "004",
    date: new Date(2020, 2, 28),
    title: "Groceries",
    amount: 199
  }
]
function App() {
  const [ expenses, setExpenses ] = useState(DUMMY_DATA);

  const addExpense = expense => {
    setExpenses(prevValue => {
      return [expense, ...prevValue]
    })
  }
  
  return (
    <div className="App">
        <NewExpense  onAddExpense={addExpense}/> 
        <Expense expenses={expenses} />
    </div>
  );
}

export default App;
 