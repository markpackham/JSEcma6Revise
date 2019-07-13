//Chart options
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
    },

    //Data goes in a series
    series: [
        {
            name: "Population",
            data: [
                8550405,
                3971883,
                2720546,
                2296224,
                1567442,
                1563025,
                1469845,
                1394928,
                1300092,
                1026908
            ]
        }
    ],
    xaxis: {
        categories: [
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Philadelphia",
            "Phoenix",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"
        ]
    },

    plotOptions: {
        bar: {
            //false is the default
            horizontal: false
        }
    },
    fill: {
        colors: ['#f44336']
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Largest US cities by population',
        align: 'center',
        margin: 20,
        offsetY: 20,
        //Sadly we can't do this via the site's css file
        style: {
            fontSize: "25px"
        }
    }
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Event method example, click horizontal button to make chart horizontal
document.getElementById("change").addEventListener("click", () =>
    chart.updateOptions({
        plotOptions: {
            bar: {
                horizontal: true
            }
        }
    })
);

document.getElementById("reset").addEventListener("click", () =>
    chart.updateOptions({
        plotOptions: {
            bar: {
                horizontal: false
            }
        }
    })
);