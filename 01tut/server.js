const os = require('os');

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

const {add, subtract, multiply, divide} = require('./math')

console.log(add(2, 3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))