for(let i=1;i<=5;i++){
    console.log(i);
    
}

// Write a for loop to print numbers from 1 to 10
for (let i=1;i<=10;i++){
    console.log(i);
    
}


for(let i=0;i<=20;i++){
    if (i%2===0){
        console.log(i);
        
    }
}


for(let i=0;i<=12;i+=2){
    console.log(i);
    
}

for(let i=1;i<=19;i++){
    if (i%2===1)
    console.log(i);
    
}


// LOG NUMBER EVEN FROM 1 TO 19
for (let i=1;i<=19;i+=2){
    console.log(i);
    
}

// SUM NUMBER FROM 1 TO 100

let sum=0;
for(let i=1;i<=100;i++){
   sum +=i;   
}
console.log(sum); 



// sum even numbers
let sumEven=0;
for(let i=0;i<=10;i++){
   if (i%2===0){
    sumEven+=i
   }
    
} console.log(sumEven);

// sum odd number
let sumOdd = 0;
for(let i=0;i<=10;i++){
    if  (i%2===1){
        sumOdd+=i

    }
}console.log(sumOdd);

// Write a for loop that finds the sum of all numbers 
// between 1 and 30 that are divisible by 3.
let sum2=0
for(let i=1;i<=30;i++){
    if (i%3===0){
        sum2 +=i;
    }
}console.log(sum2);


// Write a for loop that finds the sum of all numbers 
// between 1 and 30 that are divisible by 3.

let sum3=0;
for(let i=1;i<=30;i++){
    if (i%3===0){
        sum3+=i

    }
}console.log(sum3);


// Write a loop that: 1.Goes from 1 to 50. 
// 2. Adds up numbers that are multiples of 3 or 5.
// 3.Prints the final total.


let sum4=0
for (let i=1;i<=50;i++){
    if (i%3===0 || i%5===0){
        sum4 +=i
    }
}console.log(sum4);
