const { Rand, MSet, MArray } = require('./mutils.js');

A = new MSet([1, 1, 2, 2, 3, 3]);
B = new MSet([2, 2, 3, 3, 4, 4]);
console.log(A.difference(B));
