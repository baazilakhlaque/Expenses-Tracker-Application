import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

function NewExpense(props){
  const[isShown, setIsShown] = useState(false)

  function saveExpenseDataHandler(expenseData) {
    const updatedExpenseData = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseData(updatedExpenseData)
    setIsShown(false)
  }

  function showContentHandler(){
    setIsShown(true)
  }

  function hideContentHandler(){
    setIsShown(false)
  }
  return(
    <div className="new-expense">
      {!isShown && <button onClick={showContentHandler}>Add New Expense</button>}
      {isShown && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideContent={hideContentHandler} />}
      

    </div>
  )

}

export default NewExpense