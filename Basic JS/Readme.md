# Map, Reduce and Filter in Javascript

## Map
#### **syntax**
```
arr.map(callbackFn)
arr.map(callbackFn, thisArg)
```

The map method creates a new array by applying a function called in the map method. The map function loops through the entire array, executes the function on each element and returns a new array based on the output of the function

```javascript
arr = [2,3,4,5]

function double(x) {
    return x*2
}

const doubleResult = arr.map(double);
const tripleResult =arr.map((x) => x*3);

console.log(tripleResult)

// Output : [ 6, 9, 12, 15 ]
```
Here, the input array is mapped and a function to double the value of the element is applied on each element. The result is then stored to doubleResult.

In the second case, instead of declaring the function outside, the triple function is defined inline using arrow function syntax.
<hr>

## Reduce

#### **Syntax**
```
arr.reduce(callback[, initialValue])
```
The reduce method in javascript takes two arguments, a callback function and an optional initial value as a second argument.

```javascript
arr = [5,6,1,3,8,3,1,12]

const reducerOutput = arr.reduce(function(acc, curr) {
    acc += curr
    return acc
}, 0)

console.log(reducerOutput)

// output : 39
```
Here, the callback function takes two arguments, acc and curr. The acc is the accumulator and curr is the current value. 

At each iteration, the curr (current value) is added to the accumulator. Finally the accumulated result is returned.

<hr>

## Filter
#### **syntax**
```
arr.filter(callbackFn)
arr.filter(callbackFn, thisArg)
```
The filter method creates a shallow copy of a portion of the given array by filtering the array based on the conditions given in the function.

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const wordResult = words.filter(word => word.length > 5)

console.log(wordResult)

// output : [ 'exuberant', 'destruction', 'present' ]
```
Here the filter method is used to create a new array named wordResult that contains the words from the 'words' array with a length greater than 5.
Here the callback function is **'word => word.length > 5'** which is represented using arrow function format.