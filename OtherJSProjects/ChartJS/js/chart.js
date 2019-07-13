let myChart = document.getElementById('myChart').getContext('2d');

let lightGrey = '#777';

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = lightGrey;

let massPopChart = new Chart(myChart, {
    type: 'bar', //bar, pie, horizontalBar, line, radar, doughnut, polar area
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                //pink
                'rgba(255, 99, 132, 0.6)',
                //blue
                'rgba(54, 162, 235, 0.6)',
                //yellow
                'rgba(255, 206, 86, 0.6)',
                //teal
                'rgba(75, 192, 192, 0.6)',
                //purple
                'rgba(153, 102, 255, 0.6)',
                //orange
                'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 1,
            borderColor: lightGrey,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities In Massachusetts',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#DC143C',
                fontSize: 30
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

//You just need to change the type to 'pie'
let massPopChartPie = new Chart(myPieChart, {
    type: 'pie', //bar, pie, horizontalBar, line, radar, doughnut, polar area
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                //pink
                'rgba(255, 99, 132, 0.6)',
                //blue
                'rgba(54, 162, 235, 0.6)',
                //yellow
                'rgba(255, 206, 86, 0.6)',
                //teal
                'rgba(75, 192, 192, 0.6)',
                //purple
                'rgba(153, 102, 255, 0.6)',
                //orange
                'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 1,
            borderColor: lightGrey,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities In Massachusetts',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#DC143C',
                fontSize: 30
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});


let massPopChartRadar = new Chart(myRadarChart, {
    type: 'radar', //bar, pie, horizontalBar, line, radar, doughnut, polar area
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            borderWidth: 1,
            borderColor: lightGrey,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities In Massachusetts',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#DC143C',
                fontSize: 30
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

let massPopChartLine = new Chart(myLineChart, {
    type: 'line', //bar, pie, horizontalBar, line, radar, doughnut, polar area
    data: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            borderWidth: 1,
            borderColor: 'rgba(255, 206, 86, 0.6)',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities In Massachusetts',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#DC143C',
                fontSize: 30
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});