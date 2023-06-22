import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props) {
    const dataValues = props.dataBar.map((data)=>data.value);
    console.log(dataValues);
    const max = Math.max(...dataValues);
  return (
    <div className='chart'>
      {props.dataBar.map((item)=>{
        return <ChartBar
        key={item.label}
        value={item.value}
        maxValue={max}
        label={item.label}
        />
      })
      }
    </div>
  )
}