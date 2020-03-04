function changeByValue(b) {
     b = 2;
}

var a = 1;
changeByValue(a);
console.log(a);

function changeByRef(obj) {
    obj.prop1 = function() {
        //do nothing
    };
    obj.newProp2 = {};
    obj.d = 100;
}

var c = {};
c.prop1 = {};
changeByRef(c);
console.log(c);