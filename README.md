# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ogundimu/lotide`

**Require it:**

`const _ = require('@ogundimu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)` : Takes two array and check if they are equal and returns an assertion.
* `assertEqual(actual, expected)` : Takes two values and checks if they are equal.
* `assertObjectsEqual(actual, expected)` : Takes two object and check if they are equal and returns an assertion.
* `countLetters(string)` : Counts the number of letter in a string.
* `countOnly(allItems, itemsToCount)` : Count a given input in a string.
* `eqArrays(arry1, arry2)` : Takes two arrays and returns true if they are equal.
* `eqObjects(object1, object2)` : Takes two objects and returns true if they are equal.
* `findKey(object, callback)` : Takes object and a callback function that if true for key value returns the key that point to said key value.
* `findKeyByValue(object, value)` : Takes object and value and returns the key that has said value.
* `head(array)` : Takes array and returns the head of the array (the first index).
* `letterPositions(sentence)` : Takes (string).letter and returns all the positions of the letter in a array.
* `map(array, callbacks)` : Takes and array and runs a function (callbacks) on the array without changing it and returns a new array.
* `middle(array)` : Takes an array and returns the middle index of the array (if array.length of the said array an odd number it returns an array with one index, if even it returns an array with an index of two).
* `tail(array)` : Takes an array and returns the array without the 0 index (tail of the array) without changing the array itself.
* `takeUntil(array, callback)` : Takes a array and a callback, it iterates through the array until the function is true.
* `without(source, itemsToRemove)` : Takes two arrays as source and itemsToRemove, function then removes the itemsToRemove from source without altering the source array.