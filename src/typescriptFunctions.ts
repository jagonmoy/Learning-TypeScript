let myFunc : Function ;

/* This will throw error because myFunc has type functions
myFunc = 8 ;
*/ 
myFunc = () => {
    console.log("kire")
}
myFunc();


// Explicity telling parameter type and return type of function 
const myFunc2 = ( id : string | number , student : {name : string , age : number}) : string  => {
    console.log(student);
    console.log(id);
    return student.name ;
}
console.log(myFunc2(1,{name: "Jagonmoy",age : 25}));
// if return type is not given then by default void is considered


/* if we need to use same type of parameters for more than one function
then type aliases is a good choice !! 
*/ 

type idType = string | number ;
type studentType = {name : string , age : number};

const myFunc3 = ( id : idType, student : studentType) : string => {
    return student.name ;
}
console.log(myFunc3(2,{name: "Sadly",age : 24}));

// function signature

let add : (a: number , b : number) => number;

add = (x:number, y: number) => {
    return x+y ;
}
console.log(add(7,8));
