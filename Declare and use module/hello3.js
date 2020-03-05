function Person() {
    this.message = "Hello Nodejs !!!";
    this.sayHello = function() {
        console.log(this.message);
    }
}

module.exports = new Person();