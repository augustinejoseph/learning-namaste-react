arr = [5,6,1,3,8,3,1,12]

// sum or max
// Reduce the result to one

// Traditional Method
function findSum(arr) {
    sum = 0;
    for (let i =0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

console.log(findSum(arr))

// Using reduce function
const reducerOutput = arr.reduce(function(acc, curr) {
    acc += curr
    return acc
}, 0)
console.log(reducerOutput)