"use strict"
let coin = document.querySelector(".coin");
let headsOrTails = document.querySelector(".heads_or_tails");
let flipBtn = document.querySelector(".flip_btn");
let coinImg = document.querySelector(".coin");
// console.log(coinImg.src);

function flipCoin(){
    let lucky = Math.floor(Math.random() * 2);
    console.log(lucky);
    if(lucky === 0){
        headsOrTails.innerHTML = "Heads";
        coin.src = "images/heads.svg"
    }
    else{
        headsOrTails.innerHTML = "Tails";
        coin.src = "images/tails.svg"
    }
}


flipBtn.addEventListener("click",()=>{
    
    coin.classList.remove("animation");


    void coin.offsetWidth;

  

    coin.classList.add("animation");

    setTimeout(flipCoin,1000)
   
    // console.log("coin animation restarted");
})




