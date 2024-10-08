/* console.log("hello world")
console.log("apna", "collage", "nayyer", "tech")

let firstName = 'mateen'
let  lastName= 'hassan'
let fullName = firstName + ' ' + lastName
console.log(fullName);

let a = 10;
let b = 37;
let multi = a * b;
console.log(multi); 
let pencilPrice = 30;
let penPrice = 20;
//let output = "The total price of pencil and pen is : " + (  pencilPrice + penPrice) + " Ruppes" ;

console.log(` The total price of pencil and pen is ${pencilPrice +  penPrice} Ruppes`) 

// opraters in javascript
// Arithemtic 
let a =  10;
let b =  20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); 

// unry oprends
let a =  10;
let b =  20;
console.log(b++);
console.log(++a);
console.log(b--);
console.log(--b); 

//Assignment oprator


let a =  14;
let b =  24;
b= a;
console.log(b);

// comparison oprator
let age = 25;
console.log(age==24); 
// conditional statements
// if else statement
console.log("before my if statement");
let age = 23
if(age>=18)  
console.log("you can vote")
console.log("you can drive")
console.log("after my if statement")
}
console.log("before my if statement");
let age = 14
if(age>=18) { 
console.log("you can vote")
console.log("you can drive")

let a = 5;
console.log(5+4);
}

console.log("after my if statement")

console.log("before my if statement");
let age = 22;
if(age>=18) { 
console.log("you can vote")
console.log("you can drive")

let a = 5;
console.log(5+4);
}

console.log("after my if statement")



console.log("before my if statement");
let age = 22;
if(age>=18) { 
console.log("you can vote")
console.log("you can drive")
}
if(age < 18){
    console.log("you cannot vote")
}


console.log("after my if statement");

let firstName = "mateen"
if(firstName = "mateen"){
    console.log(`welcome ${firstName}`);

}
let lastName = "Hassan"
if(lastName == "mateen"){
    console.log(`welcome ${lastName}`);
};

let color =  "red";
if(color === "red"){
    console.log("Stop light color is red")

}
if(color === "yellow"){
    console.log("wait! light colot is yellow");

}
if(color === "green"){
    console.log("go ! light color is green");


let color =  "green";
if(color === "red"){
    console.log("Stop light color is red")

}
if(color === "yellow"){
    console.log("wait! light colot is yellow");

}
if(color === "green"){
    console.log("go ! light color is green");

}

// else if statment
let age = 40;
if(age >= 18){
console.log("you can vote")
} else if (age < 18){
    console.log("you cannot vote");

}


// else if statment
let age = 15;
if(age >= 18){
console.log("you can vote")
} else if (age < 18){
    console.log("you cannot vote");
}
 
   let marks = 75;
   if(marks >= 80){
    console.log("Grade A")
   }
   else if(marks >= 60 ){
    console.log("Grade B");
   }
   else if(marks >= 40 ){
    console.log("Grade C");
   }
    
     let month = "january"
     if(month === "january"){
        console.log("january is a winter month");
     }
     else if(month === "April"){
        console.log("April is a summer month");
     }  
        let month = "April"
        if(month === "january"){
           console.log("january is a winter month");
        }
        else if(month === "April"){
           console.log("April is a summer month");
        } 

           //else statement

           let age = 20 ;
           if(age >= 18){
            console.log("you can vote")
           }
           else 
           {
            console.log("you cannot vote");
           } 
            let age = 17 ;
           if(age >= 18){
            console.log("you can vote")
           }
           else 
           {
            console.log("you cannot vote");
           } 
          
            // prectice Question
            let size =  "xl" ;
            if(size === "xl"){
                console.log("pric is RS 25o") 
            } 
            else if(
                size === "L" ){
                    console.log("pric is RS 200")

                }
                else ( size === "M")
            {
                    console.log("pric is RS 150")
                
                } 

                let size =  "M" ;
            if(size === "xl"){
                console.log("pric is RS 25o") 
            } 
            else if(
                size === "L" ){
                    console.log("pric is RS 200")

                }
                else ( size === "M")
            {
                    console.log("pric is RS 150")
                
                } 
               // Neste if-else

               let marks = 32;
               if(marks >= 33){
                console.log("pass"); 
                if(marks>=80){
                    console.log("grade : 0 ");
                 } else{
                        console.log("grade : A");
                    }
                }
               
               else{
                console.log("better luck next time")
               }

//logical oprators

     // And    oprator 
let marks = 90;
if(  marks >= 80 && marks <= 100 ){
    console.log("grade : A");
    console.log("grade : B")
}
// OR oprator

let marks = 90;
if(  marks >= 80 || marks <= 100 ){
    console.log("grade : A");
    console.log("grade : B")
}
   
   //Practic Question
let str = "apple";
if(str[0] ===  "a" && str.length >3){
    console.log("good string");
    
}
else{
    console.log("not a good string")
}


let str1 = "app";
if(str1[0] ===  "a" && str1.length >3){
    console.log("good string");
    
}
else{
    console.log("not a good string")
}
 

let num  = 12;

if((num%3 === 0 ) && ((num+1 == 15) || (num-1 == 11))) {
    console.log("safe");
}
else{
    console.log("not safe");
}

// truthy and falsy value

if(true){
    console.log("true");
}
else{
    console.log("false");
} 
// switch statement
let color =  "green";
switch(color){
    case "red":
    console.log("stop")
    break;
    case "yellow":
        console.log("wait");
        break;
        case "green":
            console.log("go");
            break;
            default:
                console.log("unknown color");
            
}

// practice question

let day = 6;
switch(day){
    case 1:
        console.log("monday");
        break;
        case 2:
            console.log("tuesday");
            break;

            case 3:
                console.log("wednesday");
                break;

                case 4:
                    console.log("thursday");
                    break;

                    case 5:
                        console.log("friday");
                        break;

                        case 6:
                            console.log("saturday");
                            break;

                            case 7:
                                console.log("msunday");
                                break;

                        

}


// alert and prompt
alert("some thing wrong")

prompt("please enter your password")

//string methods
// format
// strinname.method()

let str = " ilearncoding"

str.indexOf("learn")*/

let msg  = "hello";

let newMsg = msg.trim();
console.log("after trim : ", newMsg );

newMsg - newMsg.toUpperCase();
console.log("after upper case : ", newMsg);

