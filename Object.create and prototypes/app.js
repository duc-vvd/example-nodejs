var person = {
    firstName: "",
    lastName: "",
    sayHello: function() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

var yen = Object.create(person);
yen.firstName = "Hoàng";
yen.lastName = "Yến";

var mai = Object.create(person);
mai.firstName = "Thanh";
mai.lastName = "Mai";

yen.sayHello();
mai.sayHello();