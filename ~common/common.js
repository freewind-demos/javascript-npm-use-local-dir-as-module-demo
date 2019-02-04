const lodash = require('lodash');

function hello(name) {
  console.log(`Hello, ${lodash.capitalize(name)}!`)
}

module.exports = {
  hello
}
