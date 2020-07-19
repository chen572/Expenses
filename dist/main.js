const renderer = new Renderer()
const expense = new ExpenseManager()
const charts = new ChartsConstructor()
M.AutoInit()

renderer.renderLandingPage()

$('.main-container').on('click', '.btn-large', () => {
    expense.getChartData().then(d => {
        const { groups, amount } = d
        renderer.renderUserPage()
        charts.doughnut(groups, amount, $('.last-month'))
        charts.doughnut(groups, amount, $('.last-year'))
        charts.line(groups, amount, $('.line'))
    })
})

$('.home').click(() => {
    expense.getChartData().then(d => {
        const { groups, amount } = d
        renderer.renderUserPage()
        charts.doughnut(groups, amount, $('.last-month'))
        charts.doughnut(groups, amount, $('.last-year'))
        charts.line(groups, amount, $('.line'))
    })
})

$('.add').click(() => {
    renderer.renderAddPage()
    M.AutoInit()
})