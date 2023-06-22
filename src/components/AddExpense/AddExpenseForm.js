import React, { useEffect, useState } from "react";
import "./AddExpenseForm.css";

export default function AddExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(Number);
  const [date, setDate] = useState("");
  const [titleError, setTitleError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    setTitle(props.title);
    setDate(props.date);
    setAmount(props.amount);
  }, [props]);

  const handleTitle = (e) => {
    let titleValue = e.target.value;
    setTitle(titleValue);
    if (titleValue.trim() !== "") {
      setTitleError("");
    } else {
      setTitleError("*");
    }
  };

  const handleAmount = (e) => {
    let amountValue = e.target.value;
    setAmount(amountValue);
    if (amountValue.trim() !== "") {
      setAmountError("");
    } else {
      setAmountError("*");
    }
  };

  const handleDate = (e) => {
    let dateValue = e.target.value;
    setDate(dateValue);
    if (dateValue.trim() !== "") {
      setDateError("");
    } else {
      setDateError("*");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.isUpdate) {
      props.handleUpdateExpense(e);
    } else {
      let isValid = true;
      if (!title || title.trim().length === 0) {
        setTitleError("*");
        isValid = false;
      }
      if (!amount || amount.trim().length === 0) {
        setAmountError("*");
        isValid = false;
      }
      if (!date || date.trim().length === 0) {
        setDateError("*");
        isValid = false;
      }

      if (isValid) {
        const inputData = {
          id: Math.random() * 100,
          title: title,
          amount: +amount,
          date: new Date(date),
        };
        props.setInputData(inputData);
        console.log(inputData);
        setTitle("");
        setAmount("");
        setDate("");
        props.reset();
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Add Expense Title</label>
            {props.isUpdate ? (
              <div>
                <input
                  type="text"
                  value={props.title}
                  onChange={props.handleTitleChange}
                ></input>
                {titleError && <span className="error">{titleError}</span>}
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  value={props.title}
                  onChange={handleTitle}
                ></input>
                {titleError && <span className="error">{titleError}</span>}
              </div>
            )}
          </div>
          <div className="new-expense__control">
            <label>Add Expense Amount</label>
            {props.isUpdate ? (
              <div>
                <input
                  type="number"
                  min="1"
                  step="1000"
                  value={props.amount}
                  onChange={props.handleAmountChange}
                ></input>
                {amountError && <span className="error">{amountError}</span>}
              </div>
            ) : (
              <div>
                <input
                  type="number"
                  min="1"
                  step="1000"
                  value={props.amount}
                  onChange={handleAmount}
                ></input>
                {amountError && <span className="error">{amountError}</span>}
              </div>
            )}
          </div>
          <div className="new-expense__control">
            <label>Add Expense Date</label>
            <div>
              <input type="date" onChange={handleDate}></input>
              {dateError && <span className="error">{dateError}</span>}
            </div>
          </div>
          <div className="new-expense__control">
            <button
              onClick={() => {
                props.clear();
              }}
            >
              Cancel
            </button>
            <button type="submit">
              {props.isUpdate ? "Update Expense" : "Add Expense"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
