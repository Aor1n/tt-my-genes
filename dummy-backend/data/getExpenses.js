module.exports = {
    getExpenses: (data) => {
        const totalExpenses = data.reduce((acc, current) => {
            acc += current.amount
            return acc
        }, 0)

        const expenses = {
            totalExpensesItems: data.length,
            totalExpenses,
            items: data,
        }

        return expenses
    }
}
