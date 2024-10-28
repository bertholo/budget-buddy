const IncomeSchema = require('../models/incomeModel');

exports.addIncome = async (req, res) => {
    const { title, amount, description, date, category } = req.body;

    const income = new IncomeSchema({
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

        await income.save();
        res.status(200).json({ message: 'Income added!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the income.' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json({ incomes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving incomes.' });
    }
};

exports.deleteIncome = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedIncome = await IncomeSchema.findByIdAndDelete(id);
        if (!deletedIncome) {
            return res.status(404).json({ error: 'Income not found.' });
        }
        res.status(200).json({ message: 'Income deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the income.' });
    }
};
