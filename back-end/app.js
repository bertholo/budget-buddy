require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const morgan = require('morgan');

const transactionsRouter = require('./routes/transactionsRouter');

const app = express();

const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: ['http://localhost:3000', 'https://budbuddy.netlify.app'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to the Budget Buddy API!');
});

app.use('/api/v1', transactionsRouter);


db()
app.listen(PORT, () => {
    console.log(`server listenning on port: ${PORT}`);
})

