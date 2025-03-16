// Load expenses from localStorage on page load
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Update the UI when the page loads
window.onload = function() {
    renderExpenses();
    renderCategorySummary();
};

// Function to add an expense
function addExpense() {
    let name = document.getElementById('expense-name').value;
    let amount = parseFloat(document.getElementById('expense-amount').value);
    let category = document.getElementById('expense-category').value;

    if (!name || !amount || amount <= 0) {
        alert('Please enter a valid expense name and amount');
        return;
    }

    const expense = {
        name,
        amount,
        category
    };

    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Reset the input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-category').value = 'Select Category'; // Reset to default category

    renderExpenses();
    renderCategorySummary();
}

// Function to render the expenses list
function renderExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';  // Clear the current list

    let total = 0;
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.name} - $${expense.amount.toFixed(2)} <span class="delete-btn" onclick="deleteExpense(${index})">Delete</span>`;
        expenseList.appendChild(li);
        total += expense.amount;
    });

    document.getElementById('total-amount').innerText = total.toFixed(2);
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    renderExpenses();
    renderCategorySummary();
}

// Function to render the summary of expenses by category
function renderCategorySummary() {
    const categorySummary = document.getElementById('category-summary');
    categorySummary.innerHTML = '';

    let categories = {};

    expenses.forEach(expense => {
        if (!categories[expense.category]) {
            categories[expense.category] = 0;
        }
        categories[expense.category] += expense.amount;
    });

    for (const [category, total] of Object.entries(categories)) {
        const div = document.createElement('div');
        div.innerHTML = `${category}: $${total.toFixed(2)}`;
        categorySummary.appendChild(div);
    }
}

const handleLogout = () => {
    console.log('Logging out');
    localStorage.removeItem('user'); // Use the correct key 'user'
    window.location.href = 'login.html'; // Redirect to the login page after logout
}