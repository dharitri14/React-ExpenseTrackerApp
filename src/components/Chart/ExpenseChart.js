import React from 'react'
import Chart from './Chart'

export default function ExpenseChart(props) {
    const chartDataBar =[
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"Api",value:0},
        {label:"May",value:0},
        {label:"Jun",value:0},
        {label:"Jul",value:0},
        {label:"Aug",value:0},
        {label:"Sep",value:0},
        {label:"Oct",value:0},
        {label:"Nov",value:0},
        {label:"Dec",value:0},
    ];
    for(let expense of props.expenseChart){
        const expenseMonth = expense.date.getMonth();
        chartDataBar[expenseMonth].value +=parseInt(expense.amount) ;
    }

  return (
    <Chart dataBar={chartDataBar}/>
  )
}
