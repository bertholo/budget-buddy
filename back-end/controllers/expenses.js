const ExpenseSchema = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
    const { title, description, date, category } = req.body;
    let { amount } = req.body;

    amount = Number(amount);

    const expense = new ExpenseSchema({
        title,
        amount,
        date,
        category,
        description
    });

    try {
        if (!title || !description || !category) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        if (typeof amount !== 'number' || amount < 0) {
            return res.status(400).json({ error: 'This field should be a number more or equal to 0.' });
        }

        await expense.save();
        res.status(200).json({ message: 'Expense added!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the expense.' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json({ expenses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving expenses.' });
    }
};

exports.deleteExpense = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedExpense = await ExpenseSchema.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ error: 'Expense not found.' });
        }
        res.status(200).json({ message: 'Expense deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the expense.' });
    }
};
