import './ExpenseItems.css'
export default function Details(props) {

  return (
    <div className='expense-item__description'>
      <h2>{props.title}</h2> 
      <div className='expense-item__price'>₹ {props.amount}</div>
      <button className='expense-item__title' onClick={props.updateTitle}>change Title </button>
      <button className='expense-item__title' onClick={props.updateAmount} >change Amount</button>
    </div>
  )
}