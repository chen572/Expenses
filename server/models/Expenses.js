const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expensesSchema = new Schema({
    item: String,
    amount: Number,
    date: Date,
    group: String
})

const Expense = mongoose.model('Expense', expensesSchema)
module.exports = Expense