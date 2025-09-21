// condionatals and statment

let wallet = 200;

if (wallet > 100) {
  console.log("You have more than 100 cedis in your wallet.");
}


let age = 16;
if (age>=18){
    console.log("you are allowed to vote");
    
}else{
    console.log("you are too yonug to vote");
    
}


let personAge =18;
if(personAge =12){
    console.log("You can apply for a driving license");
    
}else {
    console.log("you are too young to drive");
    
}


let studentScore= 100;
if(studentScore>=90){
    console.log("Execllent");
    
}else if (studentScore <=89 && studentScore>=70){
    console.log("Good Job");
    
}else if (studentScore <=69 && studentScore >=50 ){
    console.log("You passed");
    
}else {
    console.log("you failed");
    

}

let studentGrade =85;
 if(studentGrade >=90){
    console.log("Grade A");
    
 }else if(studentGrade >=89 && studentGrade<=80){
    console.log("Grade B");
    
 }else if( studentGrade >=79 && studentGrade <=70){
    console.log("Grade C");
    
 }else if( studentGrade >=69 && studentGrade <=60){
    console.log("Grade D");
    
 }else{
    console.log("Grade F");
    
 }



 let hasPassport = true;
let hasMoney = false;
let friendPays = true;
let airportOpen = true;

if (!hasPassport) {
  console.log("No passport");
} else {
  // passport exists
  if (!hasMoney) {
    if (friendPays) {
      console.log("Friend pays — travel");
    } else {
      console.log("No money");
    }
  } else {
    // passport + money
    if (!airportOpen) {
      console.log("Airport closed");
    } else {
      console.log("Travel approved");
    }
  }
}


let emailExist= true;
let passwordCorrect= true;

if (!emailExist){
    console.log('unkwown email');
    
}else {
    if(emailExist){
      if(!passwordCorrect){
        console.log('wrong password');
        
      }else{
        console.log("Login success");
        
      }
        
        
    }
}


let score = 95;

if (score>=90){
    if(score>=95){
         console.log("A+ Honors")
    }else {
    console.log("A");

    }

}else {
    if(score >=80){
        console.log("B");
        
    }else if (score>=70){
        console.log("C") 
            
        }else if(score>=50){
            console.log("D");
            
        }else{
            console.log("F");
            
        }
}


// switch

let month =3;

switch (month){
    case 1:
    console.log("Jauary");
break;  

case 2:
    console.log("Feb");
    break;

case 3:
    console.log("Mar");
    break;

case 4:
    console.log("APR");
    break;

default:
    console.log("not found");   
    
}


let score1 = 85;

switch(true){
    case (score1>=90 && score1<=100):
    console.log("A+");
    break;

    case(score1>=80):
    console.log("B");
    break;

    case(score1>=70):
    console.log("C");
    break;
    
    
    case (score>=60):
        console.log("D");
        break;

    default:
        console.log("fail");
        
        
}


let month1 =3

switch(month1){
    case 1:
        console.log("Jan");
        break;

        case 2:
            console.log("Feb");
            break;

            case 3 :
                console.log("Mar");
                break;

                default:
                    console.log("Invalid month");           
        
}


let day = 2;

switch(day){
    case 1:
        console.log("Mon");
        break;
        
    case 2:
        console.log("Tue");
        break;

    case 3:
        console.log("Wed");
        break;

    case 4:
        console.log("Thur");
        break;

    case 5:
        console.log("Fri");
        break;

    default:
        console.log("invlid day entry");
        
}


// // let day1 =3
// //  switch(day1){
// //     case 1:
// //         console.log("Monday");
// //         case 2:
// //         console.log("TUESDAY");
// //         case 3:
// //         console.log("WEDNESDAY");
// //         case 4:
// //         console.log("THURSDAY");
// //         case 5:
// //         console.log("FRIDAY");
// //         break;

// //         case 6:
// //         console.log("SATURDAY");
// //         case 7:
// //         console.log("SUNDAY");
// //         break;

// //         default:
// //             console.log("invalid day");
            

        
//  }


let day1 =3
switch(day1){
     case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("weekday");
            break;

        case 6:
        case 7:
            console.log("weekend");
            break;

        default:
            console.log("invalid day");           
       
}

let month2="DecemBER";

switch(month2.toLowerCase()){
    case "january" : 
    case "february": 
    case "december": 
    console.log("winter");
    break
    

case "march":
case "april":
case "may":
    console.log("Spring");
    break
    
    
    case "june":
    case "july":
    case "august":
        console.log("summer");
    break

    case "september":
    case "october":
    case "november":
        console.log("Autumn");
    break


    default:
        console.log("invalid month");
          
}

let day2 = "monday";
let month3 = "may";

switch(day2.toLowerCase()){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("weekday");
    
        
switch(month3.toLowerCase()){
    case "january" : 
    case "february": 
    case "december": 
    console.log("Weekday in winter");
    break

    case "march":
    case "april":
    case "may":
    console.log("Weekday in Spring");
    break;


    case "june":
    case "july":
    case "august":
        console.log("Weekday in summer");
    break;

    case "september":
    case "october":
    case "november":
        console.log("Weekday in Autumn");
    break;

}

    case "saturday":
    case "sunday":
        console.log("weekend");
       

    
    switch(month3.toLowerCase()){
    case "january" : 
    case "february": 
    case "december": 
        console.log("Weekend in winter");
    break;

    case "march":
    case "april":
    case "may":
    console.log("Weekend in Spring");
    break;


    case "june":
    case "july":
    case "august":
        console.log("Weekend in summer");
    break;

    case "september":
    case "october":
    case "november":
        console.log("Weekend in Autumn");
    break;

    }    


    default:
        console.log("Invalid day");
          
}