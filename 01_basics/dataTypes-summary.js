// Primitives data type
// 7 types : String ,Number, Boolean, Null, undefined, Symbol,BigInt

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id == anotherId) // false

// const bigNumber = 34476346757334442232

// Reference (Non primitive)
// Array, Objects, Functions


const heros = ["shaktiman", "iron man","hulk"];


let myObj = {
    name: "Nishikant",
    age : 22
}

const myFunction= function(){
    console.log("Hello world")
}
console.log(typeof myFunction);