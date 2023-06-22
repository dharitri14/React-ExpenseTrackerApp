import React, { useState } from 'react'
import './ExpenseItems.css'
import Card from '../Card/Card'
import Date from './Date'
import Details from './Details'
import AddExpenseForm from '../AddExpense/AddExpenseForm'

export default function ExpenseItems(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(props.title);
  const [updatedAmount, setUpdatedAmount] = useState(props.amount);

  const handleUpdateTitle = () => {
    setIsUpdate(true);
  }

  const handleUpdateAmount = () => {
    setIsUpdate(true);
  }
  
  const handleUpdateExpense = (event) => {
    event.preventDefault();
    props.updateExpense(props.id, updatedTitle, updatedAmount);
    setIsUpdate(false);
  };
  console.log(props.id, updatedTitle, updatedAmount);

  const handleCancelUpdate = () => {
    setIsUpdate(false);
  };

  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setUpdatedAmount(event.target.value);
  };

  return (
    <div style={{display:'grid'}}>
      <Card className="expense-item">
        <Date date={props.date} />
        <Details
           title={props.title}
           amount={props.amount}
          updateTitle={handleUpdateTitle}
          updateAmount={handleUpdateAmount} 
         >
        </Details>
      </Card>
      <div>
          {isUpdate && <AddExpenseForm
            isUpdate={true}
            id={props.id}
            title={updatedTitle}
            amount={updatedAmount}
            handleTitleChange={handleTitleChange}
            handleAmountChange={handleAmountChange}
            handleUpdateExpense={handleUpdateExpense}
            handleCancelUpdate={handleCancelUpdate}
          />}
      </div>
    </div>
  )
}
