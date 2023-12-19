const express = require("express");
const { get, create, edit, remove } = require("./services/expenses");
const { getExpenses } = require("./data/getExpenses");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/expenses", (req, res, next) => {
  try {
    const data = get(req.query);

    const response = getExpenses(data);
    res.json(response);
  } catch (err) {
    console.error(`Error while getting expenses`, err.message);
    next(err);
  }
});

app.post("/expenses", (req, res, next) => {
  try {
    const response = create(req.body);

    res.json(response);
  } catch (err) {
    console.error(`Error while adding expenses`, err.message);
    next(err);
  }
});

app.put("/expenses/:id", (req, res, next) => {
  const id = req.params.id;
  try {
    const response = edit(req.body, id);

    res.json(response);
  } catch (err) {
    console.error(`Error while editing expenses`, err.message);
    next(err);
  }
});

app.delete("/expenses/:id", (req, res, next) => {
  const id = req.params.id;
  try {
    const response = remove(id);

    res.json(response);
  } catch (err) {
    console.error(`Error while removing expenses`, err.message);
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
