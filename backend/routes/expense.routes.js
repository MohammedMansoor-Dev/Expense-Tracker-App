const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expense.controller');

// POST: Create a new expense
router.post('/expense', expenseController.createExpense);

// GET: Get all expenses
router.get('/expenses', expenseController.getAllExpenses);

// GET: Get expenses by userId
router.get('/expenses/:userId', expenseController.getExpensesByUser);

// PUT: Update an expense by ID
router.put('/expense/:id', expenseController.updateExpense);

// DELETE: Delete an expense by ID
router.delete('/expense/:id', expenseController.deleteExpense);

module.exports = router;
