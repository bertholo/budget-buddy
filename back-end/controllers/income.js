const IncomeSchema = require('../models/incomeModel');



exports.addIncome = async (req, res) => {
    const { title, amount, description, date, category } = req.body;

    const income = IncomeSchema({
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

        await income.save()
        res.status(200).json({ message: 'Income added!' })
    } catch (error) {
        console.log(error)
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json({ incomes: incomes });
    } catch (error) {
        res.sendStatus(500);
    }
}

exports.deleteIncome = async(req, res) => {
    const id = req.params.id;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'income deleted'});
        })
        .catch((err) => {
            res.sendStatus(500);
        }) 
}