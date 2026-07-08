//when any button click then flash and game start  in this we have game seq. and user seq

//1. whnever btn press then check [Event Listener by this we track each btn click]
            // check user <-> game seq

 let gameSeq = [];
 let userSeq = []; 
 
 let btns = ["yellow", "red","purple", "green"];
 
 let started = false;
 let level = 0;

 let h2 = document.querySelector("h2");


//1...................
 document.addEventListener("keypress", function () { // on the doc. when we press any keys then game start
    if(started == false){
   console.log("game started");
   started = true;

   levelUp()
    }

    });

    function gameflash(btn) {
       btn.classList.add("flash");//flash class add and thstwhy background color white
        setTimeout(function() {
             btn.classList.remove("flash");
        }, 250);//in 1 sec time remove class for it original color
    }

    function userFlash(btn) {
       btn.classList.add("userFlash");//flash class add and thstwhy background color white
        setTimeout(function() {
             btn.classList.remove("userFlash");
        }, 250);//in 1 sec time remove class for it original color
    }

    //2...........level up after flash  
    function levelUp() {
        level++;
        h2.innerText = `Level ${level}`; //level update in h2 inner text

        let randIdx = Math.floor(Math.random() * 3);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector( `.${randColor}`);
        console.log(randIdx);
        console.log(randColor);
        console.log(randBtn);
        gameflash(randBtn);
       
    }

    function btnPress() {
        console.log(this);
        let btn = this;
        userFlash(btn);
       
    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns) {
        btn.addEventListener("click", btnPress);
    }

 