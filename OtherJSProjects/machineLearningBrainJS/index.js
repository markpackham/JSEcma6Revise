const brain = require('brain.js');

const network = new brain.NeuralNetwork();

//Our training data, if it starts with a 1 the output should be 1
network.train([
    {input: [0, 0, 0], output: [0]},
    {input: [0, 0, 1], output: [0]},
    {input: [0, 1, 1], output: [0]},
    {input: [1, 0, 1], output: [1]},
    {input: [1, 1, 1], output: [1]},
]);

const output = network.run([1, 0, 0]);

//type "node index" in command line to run
console.log(`Probability: ${output}`)

/* 90% chance the answer is 1
Mark@Mark MINGW64 /e/xampp/htdocs/machineLearningBrainJS (master)
$ node index
Probability: 0.9061246514320374
 */

output2 = network.run([0, 0, 0]);
console.log(`Probability: ${output2}`)

//Little chance of being a 1, Probability: 0.053411830216646194


const network2 = new brain.NeuralNetwork();

//0 means 1st team won, 1 means 2nd team won
network2.train([
    {input: [1, 2], output: [1]}, //Team 2 wins
    {input: [1, 3], output: [1]}, //Team 3 wins
    {input: [2, 3], output: [0]}, //Team 2 wins
    {input: [2, 4], output: [1]}, //Team 4 wins
    {input: [1, 2], output: [0]}, //Team 1 wins
    {input: [1, 3], output: [0]}, //Team 1 wins
    {input: [3, 4], output: [0]} //Team 3 wins

]);

//Team 1 plays team 4
team_output = network2.run([1, 4]);
console.log(`Probability: ${team_output}`)
//Probability: 0.4792686998844147, almost a 50% chance that 2nd team "4" will win