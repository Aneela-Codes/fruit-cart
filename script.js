const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');

let bananaPrice=15;
let applePrice = 12
let orangePrice=10;
let balance=30;


let amountOfOrange=0;
let amountOfApple=0;
let amountOfBanana=0;



// -------------ORANGE-------------

function addToCart(){
  
  let counter = parseInt(document.querySelector(".counter").value);
  let count=document.querySelector(".counter").value= counter+1;
  amountOfOrange = count*orangePrice;
  // console.log(total)
  document.querySelector(".O-price span").innerHTML= amountOfOrange;
  if( amountOfOrange>balance){
    alert("Insufficient balance");  }

}
function RemoveFromCart(){
  let counter = parseInt(document.querySelector(".counter").value);
  let count=document.querySelector(".counter").value= counter =0;
  

  if(count=0){
    amountOfOrange = amountOfOrange- orangePrice;
  }
  document.querySelector(".O-price span").innerHTML= amountOfOrange;
  
}


// ------------------APPLE-------------



function getItem(){
  
  let counter = parseInt(document.querySelector(".temp").value);
  let count=document.querySelector(".temp").value= counter+1;
  amountOfApple = count*applePrice;
  // console.log(total)
  document.querySelector(".A-price span").innerHTML= amountOfApple;
  if( amountOfApple>balance){
    alert("Insufficient balance");  }

}
function RemoveItem(){
  let counter = parseInt(document.querySelector(".temp").value);
  let count=document.querySelector(".temp").value= counter =0;
  

  if(count=0){
    amountOfApple = amountOfApple- applePrice;
  }
  document.querySelector(".A-price span").innerHTML= amountOfApple;
  
}


// ---------------BANANA------------

function TakeIn(){
  let counter = parseInt(document.querySelector(".counting").value);
  let count=document.querySelector(".counting").value= counter+1;
  amountOfBanana = count*bananaPrice;
  // console.log(total)
  document.querySelector(".B-price span").innerHTML= amountOfBanana;
  if( amountOfBanana>balance){
    alert("Insufficient balance");  }  
 

}
function TakeOut(){
  
  let counter = parseInt(document.querySelector(".counting").value);
  let count=document.querySelector(".counting").value= counter =0;
  

  if(count=0){
    amountOfBanana = amountOfBanana- bananaPrice;
  }
  document.querySelector(".B-price span").innerHTML= amountOfBanana;
}
let a;
a++;