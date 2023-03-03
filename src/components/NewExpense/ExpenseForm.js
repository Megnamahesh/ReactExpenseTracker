import React,{useState} from 'react'
import Buttons from '../Buutons/Buttons'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [input,setInput] = useState({
        title: '',
        amount:'',
        date: ''
    })
    const titleHandler= (event) => {
        setInput((prev) => {
           return {
            ...prev,
            title:event.target.value
           }
        })
    }
    const amountHandler= (event) => {
        setInput((prev) => {
            return {
                ...prev,
                amount:event.target.value
            }
        })
    }
    const dateHandler= (event) => {
        setInput((prev) => {
            return {
                ...prev,
                date:event.target.value
            }
        })
    }
    const handleSubmit = (event) => {
        props.onSubmitExpense(input)
        setInput((prev) => {
            return {
                ...prev,
                title: '',
                amount:'',
                date: ''
            }
        })
    }
  return (
      <form>
         <div className="expenseFormContainer"> 
        <div className="expenseInputs">
            <label>Title</label>
            <input  type="text" value={input.title} onChange={titleHandler}/>
        </div>
        <div className="expenseInputs">
            <label>Amount</label>
            <input type="number" value={input.amount} onChange={amountHandler}/>
        </div>
        <div className="expenseInputs">
            <label>Date</label>
            <input type="date" value={input.date} min="2022-01-01" max="2022-12-31" onChange={dateHandler}/>
        </div>
    </div> 
    <div className="expenseInputsButtons">
          <Buttons onClick={handleSubmit} name="Add Expense" />
        </div>
     </form>
  
  )

}
export default ExpenseForm