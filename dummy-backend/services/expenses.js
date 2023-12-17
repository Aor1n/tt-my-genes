const db = require('./db');
const {makePutSqlParams} = require("../helpers/makeQueryParams");

function validateExpense(expense) {
    let messages = [];

    if (!expense) {
        messages.push('No object is provided');
    }

    for (const key in expense) {
        if (!expense[key]) {
            messages.push(`${key} is empty`);
        }
    }

    if (messages.length) {
        let error = new Error(messages.join());
        error.statusCode = 400;

        throw error;
    }
}

function create(newExpense) {
    validateExpense(newExpense);
    const {title, amount} = newExpense;
    const result = db.run(
        'INSERT INTO expense (title, amount) VALUES (@title, @amount)',
        {title, amount}
    );

    let message = 'Error in creating expense';
    if (result.changes) {
        message = 'Expense created successfully';
    }

    return {message};
}

function edit(expense, id) {
    validateExpense(expense);

    const {sql, params} = makePutSqlParams({
        sql: 'UPDATE expense SET',
        object: expense,
        id

    })

    const result = db.run(
        sql,
        params
    )

    let message = 'Error in editing expense';
    if (result.changes) {
        message = 'Expense edited successfully';
    }

    return {message};
}

function remove(id) {
    const result = db.run(
        `DELETE FROM expense WHERE ID = ${id}`,
        []
    );

    let message = 'Error in removing expense';
    if (result.changes) {
        message = 'Expense was removed successfully';
    }

    return {message};
}

module.exports = {
    get: db.query,
    create,
    edit,
    remove
}
