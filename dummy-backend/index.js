const express = require('express');
const app = express();
const port = 3000;

const expenseItems = [
    {
        id: '5',
        date: '2023-12-17T01:30:00.000-05:00',
        title: 'Some expense 4',
        amount: 600,
    },
    {
        id: '4',
        date: '2023-12-17T01:30:00.000-05:00',
        title: 'Some expense 2',
        amount: 500.5,
    },
    {
        id: '3',
        date: '2023-12-17T01:30:00.000-05:00',
        title: 'Some expense 3',
        amount: 293.5,
    },
    {
        id: '2',
        date: '2023-12-16T01:30:00.000-05:00',
        title: 'Some expense 2',
        amount: 100.5,
    },
    {
        id: '1',
        date: '2023-12-14T01:30:00.000-05:00',
        title: 'Some expense',
        amount: 90,
    },
];

const totalExpenses = expenseItems.reduce((acc, current) => {
    acc += current.amount
    return acc
}, 0)

const expenses = {

    totalExpensesItems: expenseItems.length,
    totalExpenses,
    items: expenseItems,
}


app.get('/expenses', (req, res) => {
    res.json(expenses);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
