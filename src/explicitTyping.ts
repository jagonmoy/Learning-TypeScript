
/*
we can explicitly give a type of a variable just like below
now variable a can take only string type values .
*/

let a:string ;
a = "bangladesh";
console.log(a)

/*
But we can not declare a = 7 . Because 7 is a number . 
*/

// explicit typing in array 

let arr: string[] = []; 

// This is possible 
arr.push("Jagonmoy");

// This is not possible 
// arr.push(7);

// explict typing in Object

let obj: {
    name : string ,
    id : number ,
    hasNID: boolean 
}

// This will be all okay because all the types matched the declaration types
obj = {
    name : "jagonmoy" ,
    id : 2017831025 ,
    hasNID: true , 
}

/*
This is not possible , 
obj = {
    name: "jagonmoy" ,
    id = 2017831025 ,
    hasNID = "NO"
}
because hasNID field doesn't match

*/


console.log(obj);