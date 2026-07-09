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
        userSeq = []; //jaisai hi levelup function call hota hai userSeq reset and empty....
        level++;
        h2.innerText = `Level ${level}`; //level update in h2 inner text

        let randIdx = Math.floor(Math.random() * 3);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector( `.${randColor}`);
        gameSeq.push(randColor);
        console.log(gameSeq);//whenever game start add color in game sequence
        gameflash(randBtn);
       
    }


    function checkAns(idx){
       
       if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
         setTimeout(levelUp, 1000);
        }
       }else{
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
        document.querySelector("body").style.backgroundColor= "white";
        }, 150)
        reset();
       }
    }

    function btnPress() {
        console.log(this);
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");  //from get attribute function get value from id //this id makes only for get out color
        userSeq.push(userColor);//color enter by user push in userSeq

        checkAns(userSeq.length-1); //now checkAns function only print color
       
    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns) {
        btn.addEventListener("click", btnPress);
    }

    function reset(){
     started = false;
     gameSeq = [];
     userSeq = [];
     level = 0;
    }


    //git reset HEAD~1.......undo the last commit.......................................from github repo.....
 