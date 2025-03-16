const Expense = require('../model/expense.model'); // Importing the Expense model
const User = require('../model/user.model'); // Importing the User model

// Create a new expense
exports.createExpense = async (req, res) => {
    const { expense, amount, category, userId } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Create a new expense and associate it with the user
    const newExpense = new Expense({
        expense,
        amount,
        category,
        user: user._id,
    });

    try {
        await newExpense.save();
        res.status(201).json({ message: 'Expense added successfully', newExpense });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error while creating expense' });
    }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().populate('user', 'username email');
        res.status(200).json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching expenses' });
    }
};

// Get expenses by userId
exports.getExpensesByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const expenses = await Expense.find({ user: userId }).populate('user', 'username email');
        res.status(200).json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching expenses for the user' });
    }
};

// Update an expense
exports.updateExpense = async (req, res) => {
    const { id } = req.params;
    const { expense, amount, category } = req.body;

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            id,
            { expense, amount, category },
            { new: true }
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense updated successfully', updatedExpense });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating expense' });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedExpense = await Expense.findByIdAndDelete(id);

        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting expense' });
    }
};
