const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ExpensesDB')
const Expense = require('../models/Expenses')
const moment = require('moment')

router.get('/expenses', (req, res) => {
    let { d1, d2 } = req.query
    d1 = d1 || '1980-01-01'
    d2 = d2 || {}
    Expense
        .find({ date: { $gt: moment(d1), $lt: moment(d2) } })
        .sort({ date: -1 })
        .exec((err, data) => { res.send(data) })
})

router.post('/new', (req, res) => {
    const { item, amount, group, date } = req.body
    const nE = new Expense({
        item,
        amount,
        date: date ?
            moment(date).format('LLLL')
            : moment().format('LLLL'),
        group
    })
    nE.save().then(s => { console.log(s.amount) })
    res.end()
})

router.put('/update', (req, res) => {
    const { group1, group2 } = req.body
    Expense.findOneAndUpdate({ group: group1 }, { group: group2 }, (e, d) => {
        res.send(d)
    })
})

router.get('/expenses/:group', (req, res) => {
    const { group } = req.params
    const { total } = req.query
    if (!total) {

        Expense.find({ group: group }).exec((e, d) => {
            res.send(d)
        })
    } else {
        Expense.aggregate([{
            $match: {
                group: group
            }
        }, {
            $group: {
                _id: null,
                total: {
                    $sum: "$amount"
                }
            }
        }]).then(d => { res.send(d) })
    }
})


module.exports = router