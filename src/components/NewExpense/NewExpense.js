import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NeWExpense = (props) => {
    const submitExpense = (data) => { //child to parent communication
    console.log(data,'Data')
    props.savedData(data)
    }
  return (
  <div className='newExpense'><ExpenseForm onSubmitExpense={submitExpense}/></div>
  )
}
export default NeWExpense