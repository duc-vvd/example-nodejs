var EventEmitter = require("events");
var util = require('util');

function Dialog() {
    this.message = "Hello world !";
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function(data) {
    console.log(this.message, data);
    this.emit("hello");
}

var dialog = new Dialog();

dialog.on("hello", function() {
    console.log("Có một lời chào mới !");
});

dialog.sayHello("Mai Hoa");