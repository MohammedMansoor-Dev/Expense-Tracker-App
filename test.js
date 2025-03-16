// // Load expenses from backend on page load
// window.onload = function() {
//     loadExpenses();
// };

// // Function to add an expense
// async function addExpense() {
//     let name = document.getElementById('expense-name').value;
//     let amount = parseFloat(document.getElementById('expense-amount').value);
//     let category = document.getElementById('expense-category').value;

//     if (!name || !amount || amount <= 0) {
//         alert('Please enter a valid expense name and amount');
//         return;
//     }

//     const expense = {
//         name,
//         amount,
//         category
//     };

//     const userId = localStorage.getItem('user');  // Get the user ID from localStorage

//     if (!userId) {
//         alert('User not logged in');
//         return;
//     }

//     // Send expense data to the backend
//     await postExpenseToBackend(expense, userId);

//     // Reset the input fields
//     document.getElementById('expense-name').value = '';
//     document.getElementById('expense-amount').value = '';
//     document.getElementById('expense-category').value = 'Select Category';

//     loadExpenses();  // Reload expenses
// }

// // Fetch and display expenses from backend
// async function loadExpenses() {
//     const userId = localStorage.getItem('user');
//     if (!userId) {
//         alert('Please log in first');
//         window.location.href = 'login.html';
//         return;
//     }

//     const response = await fetch(`http://localhost:8000/api/expenses/${userId}`);
//     const data = await response.json();

//     if (data.expenses) {
//         const expenseList = document.getElementById('expense-list');
//         expenseList.innerHTML = '';  // Clear the current list

//         let total = 0;
//         data.expenses.forEach((expense, index) => {
//             const li = document.createElement('li');
//             li.innerHTML = `${expense.name} - $${expense.amount.toFixed(2)} <span class="delete-btn" onclick="deleteExpense('${expense._id}')">Delete</span>`;
//             expenseList.appendChild(li);
//             total += expense.amount;
//         });

//         document.getElementById('total-amount').innerText = total.toFixed(2);
//     }
// }

// // Function to delete an expense
// async function deleteExpense(expenseId) {
//     const response = await fetch(`http://localhost:8000/api/expenses/${expenseId}`, {
//         method: 'DELETE'
//     });

//     if (response.ok) {
//         loadExpenses();  // Reload expenses
//     } else {
//         console.error('Failed to delete expense');
//     }
// }

// // Function to post expense to the backend
// async function postExpenseToBackend(expense, userId) {
//     const response = await fetch('http://localhost:8000/api/expenses', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...expense, userId })
//     });

//     if (!response.ok) {
//         throw new Error('Failed to post expense');
//     }

//     const data = await response.json();
//     console.log('Expense added:', data);
// }

// // Logout Function
// const handleLogout = () => {
//     localStorage.removeItem('user');
//     window.location.href = 'login.html';
// }
