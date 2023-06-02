// Array Manipulation:
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

// Concatenation
const concatArray = [...arr1, ...arr2]
console.log("concatArray", concatArray);

// Copy array
const copiedArray = [...arr1];
console.log("copiedArray", copiedArray);

// Array Expansion
console.log("Expanded Array", ...arr1)




// ----------------------------------------------
// Object Manipulation
const object1 = {a:1, b:2, c:3}
const object2 = {d:4, e:5, f:6}

// Concatenation
const concatObject = {...object1, ...object2}
console.log("concatenated object", concatObject) 

// Adding properties to an existing object:
const addedObj = {...object1, g:7}
console.log("added objects",addedObj)

// copy Object
const copiedObject = {...object1}
console.log("copied object", copiedObject);

// Object expansion
console.log("expanded object", object1)



// ----------------------------------------------
// Function Arguments
const numbers = [1,2,3,4,5]
const sum = (a,b,c) => {
    return a+b+c
}
console.log("Spread Op. in Function Parameter",sum(...numbers));



// ----------------------------------------------
// Rest Parameters
