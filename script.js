
let Budget=0;
let Balance = 0;
let Total = 0;
let orangePrice=15;
let bananaPrice=20;
let applePrice=10;
let quantityOfApple=0;
let quantityOfOrange=0;
let quantityOfBanana=0;

let counter=0;


console.log(Balance);
function addToCart(){
 Budget = document.querySelector("#budget").value;

    if(Budget==0){
        alert("Enter the amount first!")
    }
    if(Total<=Budget){
        counter++
        Total=counter*applePrice;
        Balance = Budget - Total;

        document.querySelector(".total span").innerHTML=Total;
        document.querySelector("#counter").innerHTML=counter;
        document.querySelector(".balance span").innerHTML = Balance;
    }
    else{
       alert("stop")
    }
}

function RemoveFromCart(){
   if(counter!=0){
    counter--;
    Total=counter*applePrice;
    Balance = Budget - Total;
    document.querySelector(".total span").innerHTML=Total;
    document.querySelector("#counter").innerHTML = counter;
    document.querySelector(".balance span").innerHTML = Balance;

   }
}


// ....................ORANGE-------------

