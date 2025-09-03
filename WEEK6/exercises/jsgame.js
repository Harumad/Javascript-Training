

const randomNumber = Math.floor(Math.random()*10)

const result = document.getElementById('result')
const input = document.getElementById('numberInput')

console.log(randomNumber);

function compareNumber(){
   if (randomNumber==input.value){
          result.innerHTML="Your are Right"
   }

   if (randomNumber>input.value){
           result.innerHTML="Go Higher"
   }
   if (randomNumber< input.value){
           result.innerHTML="Go Lower"
   }
}
