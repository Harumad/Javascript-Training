// 1️⃣ Function with no parameters
const sayHi = () => console.log("Hi there!");
sayHi();   // Output: Hi there!



// 2️⃣ Function with one parameter
const square = n => n * n;
console.log(square(5));  // Output: 25



// 3️⃣ Function with multiple parameters
const add = (a, b) => a + b;
console.log(add(5, 7));  // Output: 12


// Write an arrow function called sayWelcome that prints:
// "Welcome to arrow functions!"

let welcome = () => console.log(`Welcome to arrow functions!`);



// Write an arrow function called double that takes one number and returns its double.
const double=n =>n*2
let num = double (5);
console.log(num);


// Write an arrow function called multiply that takes two parameters a and b
// returns the product the two numbers and print the result using console.log
let multiply =(a,b)=>a*b;
console.log(multiply(4,3));


// Arrow Function with Multiple Lines (Block Body)
const addAndDouble=(a,b)=>{
    let sum =a+b;
    return sum *2
}
console.log(addAndDouble(3,5));

// creating a subtractAndTriple arrow function
const subtrackAndTriple=(a,b)=>{
    let sum=a-b;
    return sum*3
}
console.log(subtrackAndTriple(6,2));


const checkEvenOrodd=(num)=>{
   if (num%2===0) 
    return "Even" 

    else 
        return "Odd"
    
}
            
console.log(checkEvenOrodd(7))
console.log(checkEvenOrodd(8))


// or can  be solve this way
const checkEvenOrOdd = num => num % 2 === 0 ? "Even" : "Odd";

console.log(checkEvenOrOdd(12)); // Even
console.log(checkEvenOrOdd(7)); // Odd


// The ternary operator is a quick way to write an if...else statement in a single line
let age =18;
let result;
if (age >=18){
    result= 'Adult'

}else {
    result ='kid'
}
console.log(result);


// or using function  iternary
let age1 =18;
let result1=age>10? "Adult":"Minor"
console.log(result1);


let score=45
let feeback=score >=10? "Passed" :"Failed"
console.log(feeback);


let checkEvenOrOdd1 =num =>num%2===0? "Even": "Odd"
console.log(checkEvenOrOdd(3));
console.log(checkEvenOrOdd(4));

//Nested Ternary (use with caution)
let grade = 85;
let result2 = grade >= 80? "A"
            : grade >=70? "B"
            :grade >=50? "C"
            :"Fail"

        console.log(result2);


    let checkSign = num2 =>num2 >7 ? "positive":"negative";
    console.log(checkSign(9));


    let checkAge= age => age >18? "Adult":"Minor"
    console.log(checkAge(13));
        

    let checklLength=str=>str.length >5 ? "Long":"short"
    console.log(checklLength("name"));


    let dividible5=num =>num%5===0? "divisible by 5":"not divisble by 5"
    console.log(dividible5(20));


     
    // Write a function that checks if a number is between 10 and 50.
    // If true → return "Within range"
    // Else → return "Out of range"
    let numberRange =checks =>checks >=10 &&  checks <=50? "Within range":"Out of range"
    console.log(numberRange(51));
    // output out of range
    
    let stringStart= start=>start[0]==="a" ?    "start with a" : "does not start a"
    console.log(stringStart("commission ama ghana"));
    


    let temperature=checks=>checks>=30 ? "hot day" :"cool day"
    console.log(temperature (57));


 let evenNumber=even=>even%2===0 && even%3===0? "Even and divisible" :"condition not met"
 console.log(evenNumber(6));

 let string=string=>string.length>=10? "long":string.length >=5 && string.length<10? "medium"
    :"short"
    console.log(string("my holde "));
    



 





    

// // using ternary to check positive or negative
// let positiveOrnegative= num =>num>0? "Positive" :"Negative"
// console.log(positiveOrnegative(3));
// console.log(positiveOrnegative(-2));

//  let checks=num=>num%2===0? "Even" :"Odd"
//  console.log(checks(4));
//  console.log(checks(7));
        
    



















    function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index when found
    }
  }
  return -1; // Return -1 if not found
}

// Example use of linear search
let names = ["Alice", "Bob", "Charlie", "David"];
console.log(linearSearch(names, "Charlie")); // Output: 2


