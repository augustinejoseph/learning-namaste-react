arr = [2,3,4,5]

function double(x) {
    return x*2
}

const doubleResult = arr.map(double);
const tripleResult =arr.map((x) => x*3);

console.log(tripleResult)

