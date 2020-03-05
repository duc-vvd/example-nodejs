var obj = {
    name: "Mai Hoa",
    sayHello: function(param1, param2) {
        console.log(`Hello ${this.name}`);
        console.log("Params:", param1, param2);
    }
}

obj.sayHello("Xin Chào", 2020);
obj.sayHello.call({name: "Yến Phượng"}, "Xin chào", 2021);
obj.sayHello.apply({name: "Yến Phượng"}, ["Xin chào", 2022]);