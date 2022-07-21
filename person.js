/*
  in this file, write your person class to be exported to your main.js file
  take care not to unintentionally change the name of the class or the export statement!!!
*/

class Person {
    constructor(firstName, lastName, Age) {
         this._firstNamefirstName = firstName;
         this._lastName = lastName;
         this._Age = Age;
     }
   get firstName () {
   return this._firstname;
   }
 
   get lastName () {
   return this._lastName;
   }
 
   get Age () {
   return this._Age;
   }
 }
 
 console.log(`Hello, ${firstName} ${lastName}! You are ${Age} years old.`)
 
 export default Person;