#!/usr/bin/node
// Write code that computes and prints a factorial
const argvar = parseInt(process.argv[2]);
function Factorialize (n) {
  if ((Number.isNaN(n)) || (num === 1)) {
    return 1;
  }
  return Factorialize(n - 1) * num;
}
console.log(Factorialize(argvar));
