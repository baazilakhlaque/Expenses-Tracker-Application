import React, { useState } from 'react'
import ExpenseItem from "./components/Expenses/ExpenseItem"
import Expenses from "./components/Expenses/Expenses"

import NewExpense from "./components/NewExpense/NewExpense"

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expense, setExpense] = useState(dummyExpenses)
  const[filterList, setFilterList] = useState(dummyExpenses)
  
  function addExpenseDataHandler(expenseData){
    setExpense((prevExpense) => {
      return [expenseData, ...prevExpense]
    })
  }
  
  //My approach to filtering list problem
  /*function filterListHandler(filteredYear){
    const newFilteredList = expense.filter(function (item){
      return item.date.getFullYear().toString() === filteredYear
    })
    setFilterList(newFilteredList)
  }*/
  //onFilterList={filterListHandler}
  
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expense}></Expenses>
      

    </div>
  );
}

export default App;
