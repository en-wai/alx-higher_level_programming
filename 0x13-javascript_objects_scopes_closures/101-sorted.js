#!/usr/bin/node
/* 
Write a script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.

Your script must import dict from the file 101-data.js
In the new dictionary:
A key is a number of occurrences
A value is the list of user ids
Print the new dictionary at the end
*/
const dictn = require('./101-data').dict;
const newDictn = {};
Object.keys(dictn).map(function (key, index) {
  if (newDictn[dictn[key]] === undefined) {
    newDictn[dictn[key]] = [];
  }
  newDictn[dictn[key]].push(key);
});

console.log(newDictn);
