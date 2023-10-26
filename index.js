var hitrn = 0;
var upgrade = 0;

// yeh function bubbles bnayega

function makebubble() {
    var clutter = "";


    for (var i = 1; i <= 126; i++) {
        upgrade = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${upgrade}</div>`;
    }

    document.querySelector(".btm-panel").innerHTML = clutter;
    //  acess_panel.innerHTML=clutter;
    console.log("everything is done");
}
makebubble();

// yeh function 60 se -- me 0 tak timer chalayega

var Timer = 60;
function RunTimer() {
    var Interval = setInterval(function () {
        if (Timer > 0) {
            Timer = Timer - 1;
            document.querySelector("#counter").innerText = Timer;
        }

        else {
            clearInterval(Interval);
            document.querySelector(".btm-panel").innerHTML = `<h1>Game is over</h1>`;
        }
    }, 1000)
}
RunTimer();


//   make new hit
function IncreaseHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#newhit").innerHTML = hitrn;

}
IncreaseHit();


document.querySelector(".btm-panel").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.innerText);
    if (clickedNum === hitrn) {
        IncreseScore();
        makebubble();
        IncreaseHit();
    }
    // console.log (Number(details.target.innerHTML));
});

// inceses score
var score = 0;
function IncreseScore() {
    score += 10;
    document.querySelector("#scorebadha").innerText = score;
}
// IncreseScore();
