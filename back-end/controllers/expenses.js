const ExpenseSchema = require('../models/expenseModel');


exports.addExpense = async (req, res) => {
    const { title, amount, description, date, category } = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        date,
        category,
        description
    })

    try {
        if (!title || !description || !category) {
            return res.status(400).json({ error: 'All fields are required.' })
        }
        if (amount <= 0 || !amount === 'Number') {
            return res.status(400).json({ error: 'This field should be a number more or equal to 0.' })
        }

        await expense.save()
        res.status(200).json({ message: 'Expense added!' })
    } catch (error) {
        console.log(error)
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200).json({ expenses: expenses });
    } catch (error) {
        res.sendStatus(500);
    }
}

exports.deleteExpense = async(req, res) => {
    const id = req.params.id;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: 'expense deleted'});
        })
        .catch((err) => {
            res.sendStatus(500);
        }) 
}