const greetings = require('./greetings.json');

const sayHello = function() {
    console.log(greetings.en);
}

module.exports = sayHello;