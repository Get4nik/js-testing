import React from "react";
import "./Record.css";
import Budget from "./Budget";




var totalDebit = 0;
var totalCredit = 0;

// Function to calculate total amount
function calculateTotal(amount, transactionType) {
  if (transactionType === "credit") {
    totalCredit += parseFloat(amount);
  } else if (transactionType === "debit") {
    totalDebit += parseFloat(amount);
  }
}

function submitForm() {
  const name = document.getElementById("name").value;

  const amount = document.getElementById("amount").value;

  const date = document.getElementById("date").value;

  const transactionType = document.querySelector(
    'input[name="transactionType"]:checked'
  ).value;

  const category = document.getElementById("category").value;

  const account = document.getElementById("account").value;

  let textColor = "";
  if (transactionType === "credit") {
    textColor = "green";
  } else if (transactionType === "debit") {
    textColor = "red";
  }

  // Call function to calculate total amount
  calculateTotal(amount, transactionType);

  const transactionHTML = `
        <p style="color: ${textColor}">${name} - ${amount} - ${date} - ${transactionType} - ${category} - ${account}</p>
    `;

  document.getElementById("list_of_transactions").innerHTML += transactionHTML;

  document.getElementById("trans-form").reset();
    console.log(getTotalCredit());

    const Credits = document.getElementById('updateCredit');
    Credits.innerHTML = `${totalCredit}`;

    const Debits = document.getElementById('updateDebit');
    Debits.innerHTML = `${totalDebit}`;

    const totalDifference = totalCredit - totalDebit;
    const Differences = document.getElementById('updateDifference');
    Differences.innerHTML = `${totalDifference}`;


    
}

// Function to get total credit
function getTotalCredit() {
  return totalCredit;
}

// Function to get total debit
function getTotalDebit() {
  return totalDebit;
}

// Function to calculate difference between total credit and total debit
function getDifference() {
  return totalCredit - totalDebit;
}

function Record() {
  return (
    <div className="record">
      <div className="form">
        <h2>Enter Transaction Details</h2>
        <form id="trans-form">
          <div>
            <label for="name">
              <b>Name:</b>
            </label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="amount">
              <b>Amount:</b>
            </label>
            <input type="number" id="amount" name="amount" required />
          </div>
          <div>
            <label for="date">
              <b>Date:</b>
            </label>
            <input type="date" id="date" name="date" required />
          </div>
          <div>
            <label>
              <b>Type of Transaction:</b>
            </label>
            <input
              type="radio"
              id="credit"
              name="transactionType"
              value="credit"
              required
            />
            <label for="credit">Credit</label>
            <input
              type="radio"
              id="debit"
              name="transactionType"
              value="debit"
              required
            />
            <label for="debit">Debit</label>
          </div>
          <div>
            <label for="category">
              <b>Category:</b>
            </label>
            <select id="category" name="category" required>
              <option value="">--Select--</option>
              <option value="Education">Education</option>
              <option value="Groceries">Groceries</option>
              <option value="Health">Health</option>
              <option value="Subscriptions">Subscriptions</option>
              <option value="Takeaways">Takeaways</option>
              <option value="Education">Salary</option>
              <option value="Clothing">Clothing</option>
              <option value="Travelling">Travelling</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label for="account">
              <b>Account:</b>
            </label>
            <select id="account" name="account" required>
              <option value="">--Select--</option>
              <option value="account-1">Account 1</option>
              <option value="account-2">Account 2</option>
            </select>
          </div>
          <div className="button">
            <button type="button" onClick={submitForm}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className="list">
        <h2>
          <font id="transaction_list" color="#66FF00">
            List of Transactions
          </font>
        </h2>
        <div id="list_of_transactions"></div>
      </div>
    </div>
  );
}

export default Record;
export {Record, getTotalCredit, getTotalDebit, getDifference };
