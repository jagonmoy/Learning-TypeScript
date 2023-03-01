let person = {
    name : "jagonmoy",
    age : 45,
    student : false 
}
// This will throw error because name is a number but it should be a string
// person.name = 5 ;

// this will also throw error because there is no property such as locality
// person.locality = "Sylheti"

// this will work fine because age is a property of person and it is a person
person.age = 68
console.log(person);