#!/usr/bin/node
/* print My number: <first argument converted in integer>
if 1st argument can be converted to an integer else print given conditions */
const arg = parseInt(process.argv[2]);
if (Number.isNaN(arg)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + arg);
}
