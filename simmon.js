let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");

    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`

    let ranInd = Math.floor(Math.random() * 3);
    let ranColor = btns[ranInd];
    let randbtn = document.querySelector(`.${ranColor}`);
    // console.log(ranInd);
    // console.log(ranColor);
    // console.log(randbtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    // console.log("current level:-",level);
    // let idx=level-1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);

        }
    } else {
        h2.innerHTML = `Game over! your score was<b> ${level} </b> <br> press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
           document.querySelector("body").style.backgroundColor="white" ;
        },150 );
        reset();
    }
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}