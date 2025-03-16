const mongoose = require('mongoose');

// Define the Expense Schema
const expenseSchema = new mongoose.Schema({
    expense: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // Referencing the User model
        ref: 'User', // Name of the model to reference (it should be 'User' or whatever the model name is)
        required: true
    }
});

// Create the Expense model
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;