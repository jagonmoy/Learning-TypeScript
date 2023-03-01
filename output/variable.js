"use strict";
/*
This Block of code will throw an error because initially
the variable type is number but we trying to assign a
boolean value.
*/
/*
let number = 5 ;

number = true ;
*/
/*
This Block of code will not throw an error because initially
the variable type is undefined So we can assign any type
of value.
*/
let number;
console.log(number); // this will print undefined
number = 6;
console.log(number); // this will print 6
number = "Jagonmoy";
console.log(number); // this will print Jagonmoy
