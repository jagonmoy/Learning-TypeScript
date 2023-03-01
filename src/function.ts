
/*
This block of code will not throw an error whatever the 
type arguments have . Because the parameters type is 
undefined
*/

function add(a,b) {
    return a*b ;
}
console.log(add(5,6));

/*
This block of code will also not throw an error
inspite of multiplying string with number .Because
parameter type is undefined
*/
console.log(add("Jagonmoy",4));

function multiply(a: number , b: number) {
    return a*b ;
}

/*
now this block will throw error because parameter type is defined

console.log(multiply("jagonmoy",4));

*/

/*
this block will work fine because parameters and 
arguents are having same type
*/
console.log(multiply(8,4)); 