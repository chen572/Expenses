class Renderer {
    constructor() {

    }

    renderLandingPage() {
        const source = $('#landing-page-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template()

        $('.main-container').attr('class', 'main-container landing')
        $('.main-container').empty().append(newHTML)
    }
    
    renderExpenses() {
        
    }
    
    renderAddPage() {
        const source = $('#add-page-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template()

        $('.main-container').attr('class', 'main-container add-page')
        $('.main-container').empty().append(newHTML)
    }
    
    renderUserPage() {
        const userPage = $(
            `<div class="row"><h1 class="title col s12">User Dashboard</h1></div>
            <div class="row pies"><div class="col s12 m6 card"><canvas class="last-month"></canvas></div>
            <div class="col s12 m6 card"><canvas class="last-year"></canvas></div></div>
            <div class="row"><canvas class="col s12 line"></canvas></div>
            `)
        
        $('.main-container').attr('class', 'main-container user-dashboard')
        $('.main-container').empty().append(userPage)
    }
}