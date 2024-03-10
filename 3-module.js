// Modules

const name = require('./4-names')
const sayHi = require('./5-utils')
const data = require("./6-alternative-flaver")
require("./7-mind-grenade")


console.log(data)
console.log(name);

sayHi("susan")
sayHi(name.john)
sayHi(name.peter)