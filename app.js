let music = new Audio("music.mp3");
let turn_music = new Audio("ting.mp3");
let game_over_music = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;
let resetbtn = document.getElementById("reset");

let boxes = document.querySelectorAll(".box");

for(box of boxes){
    box.addEventListener("click",boxpress)
}

let player = document.getElementById("turn");

function boxpress() {
    let box = this;
    if((box.innerText === "") && (gameover != true)){
        box.innerText = turn;
        turn_music.play();
        changeTurn();
        player.innerText = `${turn}-player turn`;
        checkWin();
        gameOver();
    }
};

// changing player turn -------
function changeTurn() {
    if (turn === "X") {
        return turn = "O";
    } else {
        return turn = "X";
    }
};

const checkWin = () => {
    let wins = [
        [0,1,2,0,50,0],
        [3,4,5,0,155,0],
        [6,7,8,0,260,0],
        [0,3,6,-110,155,90],
        [1,4,7,0,155,90],
        [2,5,8,110,155,90],
        [0,4,8,1,155,-137],
        [2,4,6,1,155,137],
    ]
    wins.forEach(element => {
        if ((boxes[element[0]].innerText === boxes[element[1]].innerText) && (boxes[element[2]].innerText === boxes[element[1]].innerText) && (boxes[element[0]].innerText !== "")) {
            player.innerText = `${boxes[element[0]].innerText} player won!!`;
            gameover = true;
            music.play();
            document.getElementById("img").classList.replace("ofView","onView");
            document.querySelector(".line").classList.add("line_view");
            document.querySelector(".line").classList.remove("view");
            document.querySelector(".line").style.transform = `translate(${element[3]}px, ${element[4]}px) rotate(${element[5]}deg)`;
        }
    });
};

const gameOver = () => {
    if((boxes[0].innerText == "X" || boxes[0].innerText == "O") && (boxes[1].innerText == "X" || boxes[1].innerText == "O") && (boxes[2].innerText == "X" || boxes[2].innerText == "O") && (boxes[3].innerText == "X" || boxes[3].innerText == "O") && (boxes[4].innerText == "X" || boxes[4].innerText == "O") && (boxes[5].innerText == "X" || boxes[5].innerText == "O") && (boxes[6].innerText == "X" || boxes[6].innerText == "O") && (boxes[7].innerText == "X" || boxes[7].innerText == "O") && (boxes[8].innerText == "X" || boxes[8].innerText == "O")) {
        player.innerText = "Game Over!!!";
        game_over_music.play();
    }
}

resetbtn.addEventListener("click",() => {
    gameover = false;
    turn = "X";
    player.innerText = `X-player turn`;
    document.getElementById("img").classList.add("ofView");
    document.querySelector(".line").classList.add("view");
    music.pause();
    for(box of boxes){
        box.innerText = "";
    }
    document.querySelector(".line").classList.remove("line_view");
})
