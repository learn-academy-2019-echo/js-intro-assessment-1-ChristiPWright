// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// // // 1a. Write the code that determines if there is a 'B' in mantra.
const testB = (string) => {
    if(string.toLowerCase().includes('b')){
        return "Yes, this string includes the letter b."
    } else {
        return "No, this string does not include the letter b."
    }
}
console.log(testB(mantra))
// simpler version
console.log(mantra.includes("B"))
// // // 1b. Write the code that determines if there is an 'x' in mantra.
const testX = (string) => {
    if(string.toLowerCase().includes('x')){
        return "Yes, this string includes the letter x."
    } else {
        return "No, this string does not include the letter x."
    }
}
console.log(testX(mantra))

// // // 1c. Write the code that determines if there is a 'v' in mantra.
const testV = (string) => {
    if(string.toLowerCase().includes('v')){
        return "Yes, this string includes the letter v."
    } else {
        return "No, this string does not include the letter v."
    }
}
console.log(testV(mantra))

// // 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
const isLetterInString = (string, letter) => {
    if(string.toLowerCase().includes(letter)){
        return `Yes, '${string}' includes the letter ${letter}.`
    } else {
        return `No, '${string}' does not include the letter ${letter}.`
    }
}
console.log(isLetterInString(mantra, "x"))
console.log(isLetterInString(mantra, "h"))
console.log(isLetterInString("Hello World","w"))
// // ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// // 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
const lengthCompare = (var1, var2) => {
    if(var1.length === var2.length){
        return `var1's length is equal to var2's length.`
    } else if (var1.length > var2.length){
        return var1
    } else if (var1.length < var2.length){
        return var2
    } else {
        return "Check your input."
    }
}

console.log(lengthCompare(myDog, myCat))

// // 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
function stringsToArray(arg1, arg2) {
    let newArray = []
    newArray.push(arg1)
    newArray.push(arg2)
    return newArray
}

console.log(stringsToArray(myCat, myDog))

// // 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"
const lowerNow = (var1,var2) => {
    var1 = var1.toLocaleLowerCase()
    var2 = var2.toLocaleLowerCase()
    return `${var1} ${var2}`
}
console.log(lowerNow(myCat,myDog))


// // ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// // 3a. Write the code that logs each letter of the message using a for loop.
const loopLog = (string) => {
    for(let i=0; i<string.length; i++)
    console.log(string[i])
}
console.log(loopLog(myMessage))
// // i think this is logging 1 extra place returning undefined... why?

// 3b. Write the code that logs each letter of the message using map.
//I'm not sure what the output you are looking for but here is return using .map
function stringMap (string) {
    var stringArray = string.split("")
    var stringArr2 = stringArray.map(element => element + "-")
    return stringArr2.join("")    
}

console.log(stringMap(myMessage))

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

const whileFunc = (string) => {
    let i=0
    while (i < string.length) {
        console.log(string[i]);
        i++
    }
}
console.log(whileFunc(myMessage))

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().




// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
//.replace 
//string to array.filter != let vowels-- 
const noVowels = (string) => {
    var wVowels = string.split("")
    var noVowelArr = wVowels.filter(value => value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u")
    return noVowelArr.join("")
}
console.log(noVowels(testString))

//if for loop - currently returning w/ vowels... why? 
// const newVowels2 = (string) => {
//     let wVowels2 = string.split("")
//     let noVowels2 = []
//     for(let i=0; i<wVowels2.length; i++){
//         if(wVowels2[i] != "a"){
//             noVowels2.push(wVowels2[i])
//         } else if (wVowels2[i] !== "e" ){
//             noVowels2.push(wVowels2[i])
//         } else if (wVowels2[i] !== "i" ){
//             noVowels2.push(wVowels2[i])
//         } else if (wVowels2[i] !== "o" ){
//             noVowels2.push(wVowels2[i])
//         } else if (wVowels2[i] !== "u" ){
//             noVowels2.push(wVowels2[i])
//         }    
//     }
//     return  noVowels2.join("")
// }
// console.log(newVowels2(testString))


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.




// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
// // // old way
function onlyCats(array){
    let newArr = []
    for(let i=0; i<array.length; i++){
        if (array[i].animal === "cat"){
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log(onlyCats(toonimals))

// //now using .filter()
const onlyCats2 = (array) => {
    let newArr2 = array.filter(element => element.animal === "cat")
    return newArr2
}
console.log(onlyCats2(toonimals))

// //5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"
// // try 1

function catsNames(array){
    let newArr = []
    for(let i=0; i<array.length; i++){
        if (array[i].animal === "cat"){
            newArr.push(array[i].name)
        }
    }
    return newArr.join(" ")
}
console.log(catsNames(toonimals))

// // now use 2step w/ .filter &.map
const catsNames2 = (array) => {
    let newArr = array.filter(element => element.animal === "cat")
    return newArr.map(element => element.name).join(" ")
}

console.log(catsNames2(toonimals))



//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
const eachToon = (array) => {
array1.forEach(function(element) {
  return `${array.name} is a ${animal}`;
}
console.log(eachToon(toonimals))