const fs = require('fs');

const wordlist = require('wordlist-english');
const slugs = require('./output/slugs.js');

// importing the dictionary according to the documentation:
// https://github.com/jacksonrayhamilton/wordlist-english
// wordlist['english/XX'] where XX = how frequently the words
// are believed to be used. the range is from 10 (most common
// usage) to 70 (basically just scrabble words). I chose up
// to 40 here.

const englishWords = [
    ...wordlist['english/10'],
    ...wordlist['english/20'],
    ...wordlist['english/35'],
    ...wordlist['english/40'],
];

// the maximum number of words that can contain a slug before we
// just ignore the slug. this includes plurals, different parts of
// speech, etc.
const MAX_MATCHES = 12;

let output = {};

// for each slug (ex: 'akd')
for (a = 0; a < slugs.length; a++) {
    // push it as a new key to the output
    // ex: {'akd': {}}
    output[slugs[a]] = {words: []};

    // for each english word...
    for (i = 0; i < englishWords.length; i++) {
        // ...if it includes the slug...
        if (englishWords[i].includes(slugs[a])) {
            // ...push that word to its key
            // ex: {'akd': {words: ['breakdown']}}
            output[slugs[a]].words.push(englishWords[i]);
        }
    }
    // slightly inefficient but after we've gone through the whole dictionary
    // for that particular slug, let's just delete the slug if it had zero
    // matches, or more than MAX matches
    if (output[slugs[a]].words.length === 0 || output[slugs[a]].words.length > MAX_MATCHES) {
        delete output[slugs[a]];
    }
}

const exportOutput = `
var output = ${JSON.stringify(output)}
exports.default = output;
module.exports = exports['default'];
`

fs.writeFile('./output/output.js', exportOutput, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
