/*
let firstName = prompt("Enter name : ");
let lastName = prompt("Enter name");
let msg = ( "Welcome",firstName + " " + lastName);
alert(msg);

// method chaning
let msg = "hello";
let newmsg = msg.trim();
console.log( "after trim", newmsg);
newmsg = newmsg.toUpperCase();
console.log("after upper case ", newmsg);

let msg = "hello";
let newmsg = msg.trim(). toUpperCase();
console.log(newmsg);

// slice method
let  msg = "Mateen hassan ";
console.log(msg.slice(0, 4));
// -slice method
let  str = "Mateen hassan ";
console.log(str.slice(-4));

// replace method
let msg = "ilearncoding";
msg.replace("learn", "do")

//repeat method
let fruit = " mango ";

console.log(fruit.repeat(5));

// practice question
let msg = "help!";
console.log(msg.trim().toUpperCase());

let name =" mateen hassan";
console.log(name.slice(4, 9));

console.log(name.replace("hassan", "shah"));

// visualizing of array
let nums =[2,4,5,7,2,4,5,7,2,4,5,7,2,4,5,7,2,4,5,7,2,4,5,7];
console.log(nums[3]);
console.log(nums[9]);
console.log(nums[15]);
console.log(nums.length);

// creating array
let marks =[90, 50, 45, 90,]
console.log(marks)
let msg = [ 'een', 'has', 'san', 'sh', 'ah',];
console.log(msg);
let info =  [ "mateen", 777 , 2.6 ]
console.log(info);

// practice question

let month = ["january", "july" , "march" , "august"];

month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);

//concat method
let primary = ["red", "blue",  "green"];
let secondery =  ["yellow", "orange", "purple"];
console.log(primary.concat(secondery))
console.log(primary.reverse())

//sort method
let marks = [90, 50, 45, 90, 78, 90];
console.log(marks.sort());
let char = ["q" ,"e", "a", "p",  ];
console.log(char.sort());

//practic question
let month=["january","july","march","august" ];
let newmonth=[(month.slice(0,2, "july", "june"))]

console.log(newmonth)

let lang = ["c", "c++", "html", "javascript", "python", "java", "sql",];
console.log(lang.reverse());
console.log(lang.reverse(). indexOf("javascript"));

// Now starting loops
for(i=1;  i<10; i++){
    console.log(i);
}
//print all odd numb 1 to 15
for( let i=1; i<=15; i=i+2){
    console.log(i)
}


for( let i=15; i>=1; i=i-2){
    console.log(i)
}

// print even number
for( let i=2; i<=20; i=i+2){
    console.log(i)
}
for( let i=20; i>=2; i=i-2){
    console.log(i)
}
 
// multipication  table for 5
let n  = prompt("write yor number")
n=  parseInt(n);

for(let i=n; i<=n*10; i=i+n){
    console.log(i)
}

// nested loop
for(let i=1; i<=10; i++){
    console.log(`outer loop ${i}`);
    for(let j=11; j>=1; j--){
        console.log(j);
    }

}

//while loop
let i = 13;
while(i>=1){
    console.log(i);
    i--;
}
    


let m = 1
while(m<=15){
    console.log(m);
    m++;
}
   // littel bit task

   let movie = "avatar";
   let guess = prompt("my fvt movie")
   while((guess !=  movie) && (guess !=  "exit")){
    console.log("wrong")
    guess = prompt("again guess")

   }
if(guess == movie){
    console.log("you win")
}
else{
    console.log("game over")
}

// break keyword
let i = 0;
while (i < 10)
    if (i == 5) {
        break;
    } {
    console.log(i);
    i++
   
}


let fruits =  ["apple", "banana", "cherry", "date", "elderberry"];

for(let i=0; i<fruits.length; i++){
    console.log(
        i, fruits[i]);
}

// nested loops with nested arrys
let heros = ["ironman",  "captain america", "thor"]; ["ironman",  "captain america", "thor"]
for ( i=0;  i<heros.length; i++){
    for (j=0; j<heros[i].length; j++){
        console.log(heros[i][j]);
}
}

// for of loop
let frutis =["apple", "banana", "cherry", "date", "elderberry"];
for(fruit of  frutis){
    console.log(fruit);
}
for (char of "mateen hasan"){
    console.log(char);
}
    
   // for of loop nested
   let heros =  ["ironman",  "captain america", "thor"];["ironman",  "captain america", "thor"]
   for ( hero of heros){
    for (char of heros){
        console.log(heros)
   }
   }
  // creat todo app
  let todo = [];
  let req = prompt("enter you requesr");
  while(true){
    if(req === "quit"){
        console.log("qutting app")
        break;
  }
  if(req == "list"){
    console.log("here is your todo list");
    for(let i=0; i<todo.length; i++)
        console.log(i.todo[i]);
  }
  else if(req == "add"){
   let task = prompt("please enter task you want")
   todo.push(task);
   console.log("task added")
  }
  else if (req == "delete"){
    let idx = prompt("please enter your task index")
    todo.splice(idx, 1);
    console.log("task deleted");
  }else{
    console.log("invalid requesr");
  }

  req = prompt("enter you next requesr");
  
  }
  
  // js object literals
  let student = {
    name : "Mateen",
    age :  20,
    marks :  90.6,
    city : "lahore"
};

console.log(student);


  // thread / twiter post
  const post = {
    username :  "mateen",
    content : "this is  my first post",
    like : 50,
    comment : 10,
    tags : 20,
  };
  console.log(post)
   
  // get value
  let student = {
    name: "Mateen",
    age: 20,
    marks : 70,
  };
  console.log(student.marks);

const obj = {
    1 : "a",
    2 : "b",
    true  : "c",
    null : "d",
    undefined : "e",
};
console.log(obj)

// values add and update
const student = {

    name: "Mateen",
    age: 20,
    marks : 70,
    city : "lahore",
};
delete student.age
student.city  = "islamabad";
student.gender =  "male";

console.log(student)

// objet of objets
const info = {
    mateen : {
        grade : "A",
        age : 20,
    },

     hassan : {
        age  : 25,
        city : "lahore",


    }

}
console.log(info)

// Arry of objets
const students = [
{
    age  : 25,
        city : "lahore", 
},
 
{
    age  : 25,
    city : "lahore",


},
{
name : "mateen",
age : 20,
city : "islamabad",
}
]
console.log(students)

//Math random integers
let num  = Math.random();
let num2 = num * 10;
let num3  = Math.floor(num2);
console.log(num3)


//let start functions
function greet(name){
    console.log(name + " is learn to javascript")
}
let name = "mateen"
let name2= "hassan"
let name3= "ali"
let name4 = "hamza"
let name5= "shah"
greet(name)
greet(name2)
greet(name3)
greet(name4)
greet(name5)


//console.log(name + " is learn to javascript")
//console.log(name2 + " is learn to javascript")
//console.log(name3 + " is learn to javascript")
//console.log(name4 + " is learn to javascript")
//console.log(name5 + " is learn to javascript")

//practice question


function rollDice (){
    let rand =  Math.floor(Math.random() * 6) + 1;
    console.log(rand)
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();



function greet(){
    console.log(" is learn to javascript")
    console.log(  " is learn to javascript")
    console.log(  " is learn to javascript")
    console.log(  " is learn to javascript")
    console.log(  " is learn to javascript")
}
greet()

function addNumber(num1, num2){
   console.log( num1 + num2)
}
addNumber(5, 3)

function add(firstName,space,  lastName){
    console.log( firstName + space + lastName)
 }
 add("Mateen"," ", "hassan")

// scope
//functoin scope

function calSum(a, b){
    let Sum = a + b; // function scope
    console.log(Sum)
}
calSum(4, 6);

// block scope
function calSum(a, b){
    let Sum = a + b; // block scope
    console.log(Sum)

}
calSum(4, 6);

// function expression
// function expression is a function that is defined with the help of a variable
// function expression is also known as anonymous function
let name = "mateen"
 let hello =  function () {
    console.log("hello")
 }

// high order function
// high order function is a function that takes another function as an argument
function multipleGreet(func, count) { // higher function
    for(let i=1; i<=count;  i++){

        func();

}

}
let greet = function(){
    console.log("hello")
}
multipleGreet(function(){console.log("mateen")},1000);

// return a function
// return a function is a function that returns another function

let odd = function(n){
    console.log(n%2 == 0);
}
let even = function(n){
    console.log(n%2 == 0);
}

function oddEvenFatory(request){
    if (request == "odd"){
        let odd = function(n){
            console.log(n%2 == 0);
        }
    return odd;
}else if(request== "even"){
    let even = function(n){
        console.log(n%2 == 0);
    }
    return even;
}else{
    console.log("wrong")
}

}
oddEvenFatory("request");

//this keyword
//this keyword is a keyword that is used to refer to the current object in a function
const student ={
    name : "mateen",
    age : 20,
    eng :  90,
    math : 80,
    phy : 98,
    getAvg(){
        console.log(this)
        let avg =(this.eng + this.math +  this.phy)/3;
        console.log(`${this.name}"of total marks avg" ${avg}`);

    }
}
   function getAvg(){
        console.log(this)
        let avg =(this.eng + this.math +  this.phy)/3;
        console.log(`${this.name}"of total marks avg" ${avg}`);

    }

// try and catch
try{
    console.log(a);
} catch{
    console.log("error");
}

// miscellaneous topic
// Arrow funtion
// arrow function is a function that is defined using the arrow syntax
// it is a shorthand for a function expression
// it does not have its own this, arguments, super, or new.target
// it is used to define small functions that can be used as callbacks or event handlers

const sum = (a, b) => {
    console.log(a +b);
}
sum(2,65);
// this is the same as the following function expression
// implicit return in arrow function
const mul = (a, b) => (
    a * b);
   

    // set time out
    // set time out is a function that is used to execute a function after a certain amount of
console.log("hi there!");
setTimeout(() => {
    console.log("welcome to mateen hassan");
}  , 4000);

console.log("hello")

//set interval
setInterval(() => {
    console.log("hello mateen hassan");
}, 2000)
*/
// this with arrow function
 const student ={
    name: "mateen hassan",
    age: 20,
    prop: this,
    getName : function (){
        console.log(this);
        return this .name;
 },
 getAge: () => {
    console.log(this);
    return this .age;
},

getInfo1 :  function ( ){
    setTimeout(  () => {
        console.log(this);

}, 2000);
},
getInfo2 :  function(){
    setTimeout( function () {
        console.log(this);

}, 2000);
}
 }