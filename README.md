# triple

find words with unique triple letter combos

## concept

this is a simple idea: to find all the words in english that have unique three-letter combos. these scripts will let you generate a list of those words.

if you want to skip straight to the output, I've already generated a list, which you can find in the `output/output.js` file. if you want to tweak settings and run this yourself to generate a new list, keep reading.

the basic steps to do this are:

1. generate a list of all possible three-letter combos, which I call _slugs_
2. evaluate each slug against a list of all common english words, searching for matches
3. if there is more than 1 words that matches the slug, but fewer than 12 matches, save it

## how to run

to get started, clone this repo and run `npm install`. there's only one dependency (the dictionary to use).

to generate a list of slugs (step 1 above), run `node slug-generator.js`. some variables you can tweak by editing that file directly:

- the letters to use, by editing the array of letters (I use all 26)
- the number of letters in a slug, by adding or removing a nested for loop (I use three)

by default, the output is written to `./output/slugs.js`.

to generate a list of word matches (steps 2 and 3 above), run `node index.js`. some variables you can tweak by editing that file directly:

- the commonness of the word list, by choosing which word lists to import (I used fairly common words)
- the maximum number of word matches before discarding the slug (I use 12)

by default, the output is written to `./output/output.js`.

## playing triple, the game

you can run the `node play.js` script from the `output/` directory to play a game. it gives you a random slug, and you have to come up with a word that contains it. you have 5 seconds. better hurry.

## that's it

have fun. open an issue if you have any questions or comments.
