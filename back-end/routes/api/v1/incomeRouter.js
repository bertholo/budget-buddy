const express = require('express');
const incomeRouter = express.Router();

const { addIncome, getIncomes, deleteIncome } = require('../../../controllers/income');


incomeRouter.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)


module.exports = incomeRouter;