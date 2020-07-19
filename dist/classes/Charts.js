class ChartsConstructor {
    constructor() {

    }

    doughnut(lables, amount, canvas) {
        const context = canvas[0].getContext('2d')
        new Chart(context, {
            type: 'doughnut',
            data: {
                labels: lables,
                datasets: [{
                    label: '# of Votes',
                    data: amount,
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                aspectRatio: 1.5,
                layout: {
                    padding: {
                        left: 25,
                        right: 25,
                        top: 0,
                        bottom: 0
                    }
                }
        }
    })}

    line(labels, amount, canvas) {
        const context = canvas[0].getContext('2d')
        new Chart(context, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: amount,
                }]
            },
            options: {}
        })
    }
}