#!/usr/bin/node
// Write code that computes and prints a factorial
const argvar = parseInt(process.argv[2]);
function Factorial(n) {
  if ((Number.isNaN(n)) || (n === 1)) {
    return 1;
  }
  return Factorial(n - 1) * n;
}
console.log(Factorial(argvar));
