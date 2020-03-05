var EventEmitter = require('events');

module.exports = class Dialog extends EventEmitter {
    constructor() {
        super();
        this.message = "Hello word !";
    }

    sayHello(data) {
        console.log(`${this.message} : ${data}`);
        this.emit("hello", data);
    }
}