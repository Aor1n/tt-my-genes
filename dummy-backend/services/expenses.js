const db = require("./db");
const {
  makePutSqlParams,
  makeGetSqlParams,
} = require("../helpers/makeQueryParams");

function validateExpense(expense) {
  let messages = [];

  if (!expense) {
    messages.push("No object is provided");
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

function get(query) {
  const { sql, params } = makeGetSqlParams({
    sql: "SELECT * FROM expense WHERE 1=1",
    object: query,
  });
  const data = db.query(sql, params);

  return data;
}

function create(newExpense) {
  validateExpense(newExpense);
  const { title, amount, date } = newExpense;
  const result = db.run(
    "INSERT INTO expense (title, amount, date) VALUES (@title, @amount, @date)",
    { title, amount, date }
  );

  let message = "Error in creating expense";
  if (result.changes) {
    message = "Expense created successfully";
  }

  return { message };
}

function edit(expense, id) {
  validateExpense(expense);

  const { sql, params } = makePutSqlParams({
    sql: "UPDATE expense SET",
    object: expense,
    id,
  });

  const result = db.run(sql, params);

  let message = "Error in editing expense";
  if (result.changes) {
    message = "Expense edited successfully";
  }

  return { message };
}

function remove(id) {
  const result = db.run(`DELETE FROM expense WHERE ID = ${id}`, []);

  let message = "Error in removing expense";
  if (result.changes) {
    message = "Expense was removed successfully";
  }

  return { message };
}

module.exports = {
  get,
  create,
  edit,
  remove,
};
