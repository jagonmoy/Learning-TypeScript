let stringArray = ["jagonmoy","dey","saikot"];

/*
This line of code will throw error because the type is 
not string.

stringArray.push(4);

*/

/*
This line of code will not throw error because the type is 
string .
*/

stringArray.push("Shawon");

let mixArray = ["jagonmoy",25,true];

/*
the mixArray can take any input from string,number and boolean
but can not take any other type input .
That's why below code will throw error it can't take any object. 

mixArray.push({
    name : "Whatever"
})


*/

/* But these will work fine */

mixArray.push("Arnob");
mixArray.push(false);


