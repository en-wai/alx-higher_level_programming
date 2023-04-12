#!/usr/bin/node
/*
Write a function that returns the number of occurrences in a list:
Prototype: exports.nbOccurences = function (list, searchElement)
*/

exports.nbOccurences = function (list, searchElement) {
  let num_occ = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      num_occ += 1;
    }
  }
  return num_occ;
};
