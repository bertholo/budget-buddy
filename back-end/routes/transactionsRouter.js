const expenseRouter = require('./api/v1/expenseRouter');
const incomeRouter = require('./api/v1/incomeRouter');

const transactionsRouter = require('express').Router();



transactionsRouter.use('/income', incomeRouter);
transactionsRouter.use('/expense', expenseRouter);



module.exports = transactionsRouter;