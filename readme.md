# Mutils

---

## AlexMercedCoder.com

This library contains utility classes for working with Arrays, Sets and Random numbers

### installation

CDN LINK: http://www.alexmercedcoder.com/mutils.js

#### NPM

npm i mutils

```
const {Rand, MSet, MArray} = require("mutils")
```

#### Script Tag

```
<script src="http://www.alexmercedcoder.com/mutils.js" defer></script>
```

---

### Marray

---

A special type of array with all the methods of normal arrays plus all the additional methods below.

```
const myArray = new MArray(1,2,3,4,5)
```

---

**MArray.random() =>** return random element from array

**MArray.remove((value, index) => return boolean)** => the opposite of filter, remove elements where the callback function returns true, returns a MArray

**MArray.undupe() =>** returns a MArray of the array with duplicates removed

**MArray.randElim() =>** eliminates a random element and returns it

**MArray.leaveOne()** => Randomly eliminates all but one element from array and returns a MArray of removed elements

**MArray.leaveSome(number)** => Randomly eliminates all but a defined number of elements from array and returns a MArray of removed elements

**MArray.findRemove(value)** => finds and removes value from array returning the removed value

**MArray.addLength(length, value)** => increases array to desired length and fills in additional spots with the value passed. Returns itself.

**MArray.lessLengthRight(length)** => removes elements from back of the array till is desired length, returns array of removed values. Returns itself.

**MArray.lessLengthRight(length)** => removes elements from front of the array till is desired length, returns array of removed values. Returns itself.

**MArray.someMore((value, index) => return boolean, number)** => returns true if the number of iterations that return true are equal or greater to the number argument

**MArray.everyLess((value, index) => return boolean, number)** => returns true if the number of iterations that return false are equal or less to the number argument

**MArray.MapToObject((value, index) => return [key, value])** => like map but returns an object, the callback function must return a two element array [key, value]

**MArray.MapToMap((value, index) => return [key, value])** => like map but returns a Map, the callback function must return a two element array [key, value]

**MArray.MapToMap((value, index) => return [key, value])** => like map but returns a Set

**MArray.MapToUnique((value, index) => return [key, value])** => like map but returns an Array of only unique elements

**MArray.squish()** => removes the first and last elements of the array and returns them in an Marray

**MArray.shuff()** => return shuffled version of Marray

**MArray.toStrings()** => return array with all elements casted as strings

**MArray.toNums()** => return array with all elements casted as Numbers

**MArray.toBools()** => return array with all elements casted as Booleans

**MArray.iPop()** => immutable pop, return new version of Marray with last value popped

**MArray.iPush(value)** => immutable push, return new version of Marray with value pushed into end of array

**MArray.iShift()** => immutable shift, return new version of Marray with first value removed

**MArray.iUnshift(value)** => immutable unshift, return new version of Marray with value added at beginning of array

**MArray.iSplice(index, amount)** => immutable splice, return new version of Marray with the specified number of elements removed starting with the specified index.

---

### Rand

Class with several static functions for generating random numbers

---

**Rand.index(Array) =>** Return random number 0 - Array.length

**Rand.range (Low, High) =>** Return number between low and high

**Rand.num (Number) =>** Return random number 0 - Number

---

### MSet

A Class that is an extension of Set. Has all the features of Native sets plus the additional methods below.

---

combines the benefits of arrays and sets but giving you access to a dataset in both forms. The constructor takes an array to generate the MSet from. I implemented the methods from the MDN examples for sets, cause well... they are useful.

```
const pset1 = new MSet([1, 2, 3, 4]);
const pset2 = new MSet([3, 4, 5, 6]);

console.log(pset1.difference(pset2));
```

#### MSet methods

**MSet.isSuperset(MSet) =>** Returns true if the MSet is a superset of the MSet passed as an argument

**MSet.union(MSet) =>** Returns a MSet that is a combonation of this MSet and the MSet passed in as an argument.

**MSet.intersection(MSet) =>** returns MSet of elements in common between two MSets

**MSet.symmetricDifference(MSet) =>** returns MSet of elements not shared by both MSets

**MSet.difference(MSet) =>** returns MSet of elements not shared by this array with the passed in array
