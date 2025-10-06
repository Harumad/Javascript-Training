
// A welcome function
function greet(){
    console.log('Welcome to Codetrain');
    
}greet('Haruna')


// a welcoe to greet
function greetUser(name){
    console.log(`Welcome to Codetrain ${name}`);
    
}
greetUser('Haruna')
greetUser('Aisha')


// Function with return value
function add (a,b){
    return a+b
}
let sum=6+10
console.log(sum);


// write a function called welcome that prints
function Welcome (){
    console.log('Welcome to Javascript functions!');
    
}
Welcome()

// Write a no-parameter function that prints:Learning functions step by step!
function noParameter(){
    console.log('learnig functions step by step');
    
}
noParameter()


// Write a no-parameter function that prints 
// Learning functions step by step!
function noParameter(){
    console.log('Learning functions step by step!');
    
}
noParameter()


// Write a function called startLearning that prints:
// Write a function called startLearning that prints:
function startLearning(){
console.log(`I am starting JavaScript functions today!`);

}
startLearning()


function introduce( name,language){
    console.log(`My name is ${name} and I am learning  ${language}`);
    
}
introduce("Haruna", "JavaScript")


// Functions with Return Values
function addTwoNumbers(a,b){
    return a+b
}
let sum1 = addTwoNumbers(5,4)
console.log(sum1);



// Functions with Return Values
function greetUsers(name){
    return`Hello, ${name}! Welcome back `
}
let message =  greetUsers("Haruna")
console.log(message);

//  write a function that calculates the area of a rectangle.

function calculateArea(length,width){
    let area =length *width;
    return area;
}
let result =calculateArea(5,10)
console.log(result);


// Write a function that calculates the perimeter of a rectangle.
// formular 2X (lenght + width)

function calculatePerimeter(length,width){
    let perimeter = 2*(length + width);
    return perimeter
}
let result1 =calculatePerimeter(10,5)
console.log(result1);


// Return a number
function add(a,b){
    return  a+b;
}
let x= add(4,7)
console.log(x);

// Return a string
function greet (name){
    return `Hello ${name}`
}
console.log(greet("Haruna"));

// No return → undefined
function sayHello (){
    console.log("Hi");
    
}
let r=sayHello()
console.log(r);


// Early returns are useful for validation/guard clauses
function divide (a,b){
    if (b===0) return null
    return a/b
}
let g=divide(6,3)
console.log(g);

// Guard clause (early return)
function widthdraw(balance,amount){
    if (amount>balance) return 'Insufficient Funds'
    return balance-amount
}
let account=widthdraw(200,400)
console.log(account);


// Return an Average
function average(a,b,c){
    const sum= a+b+c;
    return sum/3
}
let k=average(4,7,3)
console.log(k);

// Return an object
function makePerson(name,age){
    return{name:name,age:age};

}
let person =makePerson('Haruna',24)
console.log(person);


// Exercise
function greetReturn(name){
    return `Hello ${name}`
}
console.log(greetReturn("Haruna"));


function isEven(n){
    return n%2===0
   
}
console.log(isEven(9));
console.log(isEven(4));

function sunUpTo(n){
    let sum= 1+2+3+4+5
    return sum
}



function sumUpTo(n){
   let sum =0
    for(let i=1;i<=n;i++){
      sum +=i
      
    }
      return sum  
}
console.log(sumUpTo(5));


// function Expression
let sumTwo =function (a,b){
    let sum= a+b
    console.log(sum);
    
    
}
sumTwo(5,4)


let multiply= function(a,b){
    let result=a*b;
    return result
}
let finalresult=multiply(5,6)
console.log(finalresult);
