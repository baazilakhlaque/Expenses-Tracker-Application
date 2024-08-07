import React, { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import ExpensesChart from "./ExpensesChart"

function Expenses(props){
  const[filteredYear, setFilteredYear] = useState('2020')

  function addFilterHandler(selectedFilter){
    setFilteredYear(selectedFilter)
    //props.onFilterList(selectedFilter) Part of my approach to solve filtering problem
  }

  const filteredList = props.items.filter(function (item){
    return item.date.getFullYear().toString() === filteredYear
  })

  let expenseContent = <p> No expenses found </p>
  if (filteredList.length > 0){
    expenseContent = filteredList.map(expense => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      price={expense.amount}
      date={expense.date} 
      />
      ))
  }

  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter select={filteredYear} onAddFilter={addFilterHandler} />
      </div>
      <ExpensesChart finalList={filteredList} />
      {expenseContent}
    </Card>
  );

}

export default Expenses