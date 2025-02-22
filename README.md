# MongoDB $inc operator with string value

This repository demonstrates a common mistake when using the `$inc` operator in MongoDB update queries. The `$inc` operator is used to increment a numerical value in a document. However, passing a string value to the `$inc` operator can lead to unexpected behavior. This example shows the incorrect usage and how to fix it.

## Bug
The `bug.js` file demonstrates the incorrect use of the `$inc` operator.  The script attempts to increment the `count` field using a string value, which results in an unexpected outcome.

## Solution
The `bugSolution.js` file shows the correct way to use the `$inc` operator. The `count` field is incremented correctly using a numeric value.