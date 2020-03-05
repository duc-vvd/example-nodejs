var hello1 = require('./hello1');
var hello2 = require('./hello2').sayHello;

hello1();
hello2();

var hello3 = require('./hello3');

hello3.sayHello();
hello3.message = "Change hello Nodejs !!!";

var hello32 = require('./hello3');

hello32.sayHello();

var Hello4 = require('./hello4');

var hello4 = new Hello4();

hello4.sayHello();

var hello5 = require('./hello5');

hello5.sayHello();