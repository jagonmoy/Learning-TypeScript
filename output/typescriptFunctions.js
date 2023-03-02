"use strict";
let myFunc;
/* This will throw error because myFunc has type functions
myFunc = 8 ;
*/
myFunc = () => {
    console.log("kire");
};
myFunc();
// Explicity telling parameter type and return type of function 
const myFunc2 = (id, student) => {
    console.log(student);
    console.log(id);
    return student.name;
};
console.log(myFunc2(1, { name: "Jagonmoy", age: 25 }));
const myFunc3 = (id, student) => {
    return student.name;
};
console.log(myFunc3(2, { name: "Sadly", age: 24 }));
// function signature
let add;
add = (x, y) => {
    return x + y;
};
console.log(add(7, 8));
