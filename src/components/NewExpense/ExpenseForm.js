import React, { useState } from 'react'
import "./ExpenseForm.css"

function ExpenseForm(props){

  const[inputTitle, setInputTitle] = useState("")
  const[inputAmount, setInputAmount] = useState("")
  const[inputDate, setInputDate] = useState("")


  function titleHandler(event){
    setInputTitle(event.target.value)
  }
  function amountHandler(event){
    setInputAmount(event.target.value)

  }
  function dateHandler(event){
    setInputDate(event.target.value)
  }

  function submissionHandler(event){
    event.preventDefault()
    const expenseData={
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate)
    }
    props.onSaveExpenseData(expenseData)
    setInputAmount("")
    setInputDate("")
    setInputTitle("")
  }



  return (
  <form onSubmit={submissionHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleHandler} value={inputTitle}></input>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" onChange={amountHandler} value={inputAmount}></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateHandler} value={inputDate}></input>
      </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.hideContent}>Cancel</button>
    </div>
  </form>


  )

}
  



export default ExpenseForm