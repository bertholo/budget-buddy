const express = require('express');
const expenseRouter = express.Router();

const { addExpense, getExpenses, deleteExpense } = require('../../../controllers/expenses');


expenseRouter.post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)


module.exports = expenseRouter;