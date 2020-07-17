class ExpenseManager {
    constructor() {
        this.expenses = []
    }

    addExpense(expense) {
        return $.post('/new', expense).then(e => { this.expenses.push(expense) })
    }

    getExpenses(d1, d2) {
        return $.get(`/expenses?d1=${d1}&d2=${d2}`).then(e => { this.expenses = e })
    }
}