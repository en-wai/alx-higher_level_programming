#!/usr/bin/node
// Write code that prints a square.
const sq_size = process.argv[2];
if (isNaN(sq_size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < sq_size; i++) {
    console.log('X'.repeat(sq_size));
  }
}
