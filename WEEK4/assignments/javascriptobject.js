
//  Student Report
//  A school keeps student records in an object. 
//  Create an object called student with properties for name, 
//  age, grade, and subjects (an array of subject names). 
//  Then, print the student’s name and subjects.

const student = {
  name: "Mohammed Haruna",
  age: 18,
  grade: "SHS 3",
  subjects: ["Mathematics", "English", "Physics", "ICT"],
};

// Print student's name
console.log("Student Name:", student.name);

// Print student's subjects
console.log("Subjects:", student.subjects);


// Online Store Product
//  An online store wants to store product details. 
//  Create an object called product with properties: name, price, stock, and category. 
//  Write a function that reduces the stock when a product is purchased.

const product = {
  name: "Wireless Headphones",
  price: 250,
  stock: 10,
  category: "Electronics",
};

function purchaseProduct(quantity) {
  if (product.stock >= quantity) {
    product.stock -= quantity;
    console.log(`Purchase successful. Remaining stock: ${product.stock}`);
  } else {
    console.log("Not enough stock available.");
  }
}

// Example purchase
purchaseProduct(3);


// Car Rental System
//  A car rental company stores details of available cars in an array of objects. 
//  Each car object has properties: brand, model, year, and available (true or false). 
//  Write a function that marks a car as rented (sets available to false) when it is booked.

const cars = [
  { brand: "Toyota", model: "Corolla", year: 2020, available: true },
  { brand: "Honda", model: "Civic", year: 2019, available: true },
  { brand: "Hyundai", model: "Elantra", year: 2021, available: true },
];

function rentCar(modelName) {
  const car = cars.find((car) => car.model === modelName);

  if (car && car.available) {
    car.available = false;
    console.log(`${modelName} has been rented successfully.`);
  } else {
    console.log("Car not available or does not exist.");
  }
}

// Example booking
rentCar("Civic");

