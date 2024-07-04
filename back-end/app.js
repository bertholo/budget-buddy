require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const morgan = require('morgan');

const transactionsRouter = require('./routes/transactionsRouter');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use('/api/v1', transactionsRouter);


db()
app.listen(PORT, () => {
    console.log(`server listenning on port: ${PORT}`);
})

