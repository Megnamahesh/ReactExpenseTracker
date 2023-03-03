import React,{useState,useRef} from 'react'
import ExpenseItem from "./components/ExpenseItem";
import Wrapper from './components/wrapper'
import NeWExpense from "./components/NewExpense/NewExpense";
import './App.css'
function App() {
  const data = [
    {
      id: '1',
      date: 'March 12th 2021',
      title: 'Car Insurance',
      amount: '$231.12'
    },
    {
      id: '2',
      date: 'March 13th 2022',
      title: 'Health Insurance',
      amount: '$236.12'
    },
    {
      id: '3',
      date: 'March 14th 2023',
      title: 'Car Insurance',
      amount: '$239.12'
    },
    {
      id: '4',
      date: 'March 15th 2024',
      title: 'My Insurance',
      amount: '$431.12'
    }
  ]
  const [expense,setExpense] = useState(data)
  const formDataHandler = (expenseData) => {
    setExpense((prevState) => {
      return [
        expenseData,
        ...prevState
      ]
    })
  }
  let expensesComp = <p>No Items Found</p>
  
  if(expense.length > 0) {
    expensesComp =   expense?.map((expense) => {
      return  <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
      })
  } 
  const expenseInitialValue = useRef(data)
  const handleSearch = (event) => {
    if(event.target.value !== "") {
      const filteredExpense =  expense?.filter((item) => {
        return item.title.toLowerCase().includes( event.target.value.toLowerCase())
      })
      setExpense(filteredExpense)
    } else {
      console.log(expenseInitialValue,'1')
      setExpense(expenseInitialValue.current)
    }
   }

  return (
    <Wrapper className='expense'>
      <NeWExpense savedData={formDataHandler}/>
      <div className='expenseContainer'> 
      <div className='searchContainer'>
        <h5>Filter By Title</h5>
        <input type="search" onChange={handleSearch}/>
      </div>
      {expensesComp }
   
      </div>
    </Wrapper>
  );
}

export default App;
