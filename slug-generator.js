const fs = require('fs');

const abc = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'
];

let slug = '';
let output = [];

// loop through each letter, nested three levels. produces all
// 17,576 three-letter slugs. can be refactored to produce all
// two-letter or four-letter slugs without too much trouble,
// just remove or add a level of nesting.
for (a=0; a < 26; a++) {
    const firstLetter = abc[a];
    for (b=0; b < 26; b++) {
        const secondLetter = abc[b];
        for (c=0; c < 26; c++) {
            const thirdLetter = abc[c]
            slug = firstLetter + secondLetter + thirdLetter;
            output.push(slug);
        }
    }
}

// export in a commonjs format so the file can be require()'d
const exportedOutput = `
var slugs = ${JSON.stringify(output)}
exports.default = slugs;
module.exports = exports['default'];
`;

fs.writeFile('./output/slugs.js', exportedOutput, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
