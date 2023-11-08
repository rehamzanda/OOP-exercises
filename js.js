//Exercise 1 - Classes
//Create a class called `Person` with the following properties and methods:

/*1 - Properties:
 `name` (string)
 `age` (number)
2 - Methods:

 `introduce()`: This method should return a string introducing the person, for example: "Hi, my name is John and I am 25 years old."*/

 //I create a class Person which has two parameteres name and age
 class Person {
    constructor(name, age) {
      this.name = name;// this indicate to the inserted object 
      this.age = age;
    }
    //declare a function that return a string which is a method of class person
    introduce(){
        return `Hi, my name is ${this.name} and I am  ${this.age} years old.`
    }
  
};

function describePerson(callback){

    callback.call(person1);
}

//Exercise 2 - This
//Create a new object using the `Person` class you defined in Exercise 1. Name the object `person1` and set the `name` and `age` properties accordingly
//let person1= new Person('John',25);
//console.log(person1)

//create a function called `describePerson` that takes a callback function as an argument. Inside the `describePerson` function, call the callback function with `person1` as the `this` context.

 //declare a function that take a fucntion as an argument to this callback fun will used to call an object using this context

// declare a fun wait that take one number as an argument and return Promis 
    const wait = (milliSeconds)=> {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{// we used the seTimeout async fun to resolve the value after inserted milliSeconds so that it will not block my code if there was a delay in this part
                resolve(`the promis will be kept and solved after ${milliSeconds} `), milliSeconds})
        })
    }
//test Promis:

//call function wait which return promis:
wait(5000) // calling it without using then will return pending and not resolved and the code will not give the value or wait until I use .then
.then((result)=> {console.log(result)})/// give me the resolved value after waiting 3000 
.catch((err)=> {console.log(err)})



let person1= new Person('John',25);
//console.log(person1)
function callbackFunction ()
{ console.log(this.name, this.age)}
describePerson(callbackFunction);