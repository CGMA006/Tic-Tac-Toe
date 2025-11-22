let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#don");
let board = ["", "", "", "", "", "", "", "", ""];
let playerO = 1;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        let currentPlayer = playerO === 1 ? "O" : "X";
        box.innerText = currentPlayer;
        board[index] = currentPlayer;
        box.disabled = true;

        checkWinner();

        playerO = playerO === 1 ? 0 : 1;
    });
});

function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
        let [a, b, c] = winPatterns[i];
        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {
            alert(board[a] + " wins!");
            disableAllBoxes();
            return;
        }
    }
}

function disableAllBoxes() {
    boxes.forEach(box => box.disabled = true);
}


let boxez = document.querySelectorAll(".box");
let don = document.querySelector("#don");

don.addEventListener("click", () => {
    boxez.forEach(box => {
        box.innerText = "";  
        box.disabled = false; 
    });
    
    board = ["", "", "", "", "", "", "", "", ""]; 
    playerO = 1; 
});

