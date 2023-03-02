"use strict";
// b variable can be either string or boolean 
let b;
/* this will throw error because b is a number
b = 6 ;
*/
// this will not throw any error 
b = false;
b = "Hello";
// c can be either a string or a number array
let c;
// this will work fine 
c = [1, 2];
c = "hi";
/* But this won't
c = 1
*/ 
