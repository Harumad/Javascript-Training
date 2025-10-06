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
