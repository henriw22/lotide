# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @henriw22/lotide`

**Require it:**

`const _ = require('@henriw22/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns index [0] of an array
* `tail(...)`: returns the input array without the index [0]
* `middle(...)`: returns the middle value of an array
* `assertEqual(...)`: confirming if two values are the same
* `eqArrays(...)`: checking if two arrays are the same
* `assertArraysEqual(...)`: confirming if two arrays are the same  