const person = {
    fistName: "Hoa",
    lastName: "Mai",
    sayHello: function() {
        console.log("Hello, " + this.fistName + " " + this.lastName);
    }
};

person.sayHello();

let fistName = "fistName"

console.log(person[fistName]);