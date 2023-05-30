arr = [2,3,4,5]

function double(x) {
    return x*2
}
function triple(x) {
    return x * 3
}

const doubleResult = arr.map(double);
const tripleResult =arr.map(triple);
console.log(doubleResult)
console.log('====================================');
console.log(tripleResult);
console.log('====================================');