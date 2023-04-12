#!/usr/bin/node
// Write a function that executes a function x times
exports.callMeMoby = function (x, otherFunction) {
  while (x > 0) {
    otherFunction();
    x--;
  }
};
