import { useEffect, useState } from 'react';
import './App.css';
import FirstCard from './components/Card/FirstCard';
import SecondCard from './components/Card/SecondCard';


function App() {
  const [expenses, updateExpenses] = useState([]);

  useEffect(() => {
  const arr = [];
  for ( let i=0; i< localStorage.length; i++){
    const data = JSON.parse(localStorage.getItem(localStorage.key(i)))
    data.date= new Date(data.date)
    arr.push(data)
  }
  updateExpenses(arr)
},[])

const inputData = (data) => {
  expenses.push(data)
  localStorage.setItem(data.id, JSON.stringify(data))
  updateExpenses([...expenses])
}

const clearData = () => {
  localStorage.clear()
  updateExpenses([])
}

  return (
    <div className="App">
      <FirstCard setInputData={inputData} clear={clearData}/>
      <SecondCard data={expenses}/>
    </div>
  );
}

export default App;
