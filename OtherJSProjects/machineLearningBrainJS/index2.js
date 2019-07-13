const brain = require('brain.js');
const data = require('./data');

//we are working with string from the json file
const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

const output = network.run('I fixed the power supply');

console.log(`Category: ${output}`);
/*
$ node index2
Category: hardware
 */

const output2 = network.run('The code has bugs');

console.log(`Category: ${output2}`);
//Category: t-testssoftware