#!/usr/bin/node

exports.addMeMaybe = function (number, otherFunction) {
  return otherFunction(number += 1);
};
