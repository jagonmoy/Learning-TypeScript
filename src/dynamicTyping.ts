
/* let a : any ;
   let a  ;
    
    Both of the statements are actually same . If we don't
    explicitly declare type of a variable then it is by default
    will get any type .
*/

let d : any ;
// below statements will not throw any error 
d = "jagonmoy" ;
d = true ;
d = 4 ;

let obj2 : {
    name : any ,
    id : any ,
}
obj2 = {
    name : 12123 ,
    id : false 
}