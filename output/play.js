const output = require('./output.js');

const slug = Object.keys(output)[Math.floor(Math.random()*Object.keys(output).length)];

console.log('random slug: ', slug); 
console.log('answer revealed in 5 seconds.');

setTimeout(() => console.log(output[slug].words.toString()), 5000);

