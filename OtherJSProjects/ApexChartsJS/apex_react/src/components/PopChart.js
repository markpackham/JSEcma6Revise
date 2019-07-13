import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                xaxis: {
                    categories: ["New York",
                        "Los Angeles",
                        "Chicago",
                        "Houston",
                        "Philadelphia",
                        "Phoenix",
                        "San Antonio",
                        "San Diego",
                        "Dallas",
                        "San Jose"]
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
            },
            series: [{
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
            }]
        }
    }

    onClick = () => {
        //console.log('test');
        /* the spread operator ... takes everything already in options
        and puts it into this value
         */
        this.setState({
            options: {
                ...this.state.options,
                plotOptions: {
                    ...this.state.options.plotOptions,
                    bar: {
                        ...this.state.options.plotOptions.bar,
                        /* create toggle functionality so whatever the value is when
                        you click it then becomes the opposite
                         */
                        horizontal: !this.state.options.plotOptions.bar.horizontal
                    }
                }
            }
        });
    };

    render() {
        return (
            /* React fragment is a fake DOM element, we
            need it to contain both the chart & buttons */
            <React.Fragment>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="450"
                    width="100%"
                />
                <button onClick={this.onClick}>Horizontal Toggle</button>
            </React.Fragment>
        );

    }
}

export default PopChart;