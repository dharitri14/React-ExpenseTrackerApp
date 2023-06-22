import React, { useState } from 'react'
import './FirstCard.css'
import AddExpenseForm from '../AddExpense/AddExpenseForm';

export default function FirstCard(props) {
    const [addExpense,changeAddExpense] = useState(true);

    const addForm=()=>{
        changeAddExpense(!addExpense);
    }

    const inputData=(data)=>{
        data={
            ...data,
            id:Math.random().toString(),
        }
        props.setInputData(data);
    }


 if(addExpense){
     return (
         <div className='new-expense'>
           <button onClick={addForm}>Add Expense</button>
           <button onClick={()=>{props.clear()}}>Clear All Data</button>
         </div>
     )
 }
 else{
    return(
        <div className="new-expense">
          <AddExpenseForm setInputData={inputData} reset={addForm}/>
        </div>
    )
 }
}
