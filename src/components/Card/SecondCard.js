import React, { useEffect, useState } from 'react'
import YearFilter from "../YearFilter/YearFilter";
import "./SecondCard.css";
import ExpenseList from '../ExpenseList/ExpenseList';
import Card from './Card';
import ExpenseChart from '../Chart/ExpenseChart';

export default function SecondCard(props) {
  const [year, changeYear] = useState("2021");
  const [expense, setExpense] = useState([]);

  const filterChange = (selectYear) => {
    changeYear(selectYear);
  };
  console.log(year)

  const updateExpense = (id, updatedTitle, updatedAmount) => {

    const updatedExpenses = expense.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: updatedTitle,
          amount: updatedAmount
        };
      }
      return item;
    });
    setExpense(updatedExpenses);
    localStorage.setItem(id, JSON.stringify({ ...expense.find(item => item.id === id), title: updatedTitle, amount: updatedAmount }));
  };
  

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      const data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      data.date = new Date(data.date);
      arr.push(data);
    }
    setExpense(arr);
  }, []);

  useEffect(()=> {
    const filterExpense = props.data.filter((element)=>{
        return element.date.getFullYear().toString() === year;
    });
    setExpense(filterExpense)
  },[props.data, year]);

  return (
    <Card className="expenses">  
        <YearFilter selected={year} handleFilter={filterChange}/> 
        <ExpenseChart expenseChart={expense}/>
        <ExpenseList data={expense} updateExpense={updateExpense}/>
    </Card>
  );
}