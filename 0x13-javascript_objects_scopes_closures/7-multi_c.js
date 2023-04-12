#!/usr/bin/node
/*
Write a function that returns the number of occurrences in a list:
Prototype: exports.nbOccurences = function (list, searchElement)
*/

const num_occurence = process.argv[2];
if (isNaN(num_occurence)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < num_occurence; i++) {
    console.log('C is fun');
  }
}
