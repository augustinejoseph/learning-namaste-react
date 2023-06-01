arr = [3,5,8,5,1]
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function isOdd(x) {
    return x%2 != 0
}

function isEven(x) {
    return x%2 == 0;
}


const result = arr.filter(isOdd);
console.log(result);

const evenResult = arr.filter(isEven)
console.log(evenResult)

const greaterThanFour = arr.filter((x) => x >4)
console.log(greaterThanFour)

const wordResult = words.filter(word => word.length > 5)
console.log(wordResult)