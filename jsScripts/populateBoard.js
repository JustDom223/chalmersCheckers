
function isValidCell(row, col) {
    // Logic to determine if a cell at (row, col) is a valid, playable cell
    // You'll need to define this based on your board's layout
}
// player constructor
function Player(name, colour){
    this.name = name;
    this.colour = colour;
}

const player1 = new Player('Dom', 'red')
const player2 = new Player('NotDom', 'blue')

let board = [
    [null, null, null, null, {  }, null, null, null, null, null, null, null, null, null, null, null, null],//A4-4
    [null, null, null, null, {  }, {  }, null, null, null, null, null, null, null, null, null, null, null],//B4-5
    [null, null, null, null, {  }, {  }, {  }, null, null, null, null, null, null, null, null, null, null],//C4-6
    [null, null, null, null, {  }, {  }, {  }, {  }, null, null, null, null, null, null, null, null, null],//D4-7
    [{  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],//E0-13
    [null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],//F1-12
    [null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],//G2-12
    [null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],//H3-12
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],//I4-12
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null],//J4-13
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null],//K4-14
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null],//L4-15
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }],//M4-16
    [null, null, null, null, null, null, null, null, null, {  }, {  }, {  }, {  }, null, null, null, null],//N9-12
    [null, null, null, null, null, null, null, null, null, null, {  }, {  }, {  }, null, null, null, null],//O10-12
    [null, null, null, null, null, null, null, null, null, null, null, {  }, {  }, null, null, null, null],//P11-12
    [null, null, null, null, null, null, null, null, null, null, null, null, {  }, null, null, null, null],//Q12-12
];

// for (i = 0; i < board.length; i++){
    //     console.log(board[i].length)
    // }
boardPositionElements = document.querySelectorAll('.boardCell')

boardPositionElements.forEach(element => {
    element.addEventListener('click', () =>{
        const row = parseInt(element.getAttribute('data-row'), 10);
        const col = parseInt(element.getAttribute('data-col'), 10);
        const piece = 'X'
        // board[row][col][1]
        element.innerText = piece
        // Now you can use row and col to reference the correct position in gameBoard
        console.log(`Element at row ${row}, col ${col} was clicked`);
        console.log(board[row][col])

    })
})

function populateBoardTwoPlayer(playerOne, playerTwo){
    // top 10 positions
    for(i = 0; i<4; i ++){
        for(j = 0; j<board[i].length; j++){
            if(board[i][j] !== null){
                board[i][j] = {player2}
                console.log('i made it')
            }
        }
    };
    // bottom 10 positions
    for(i = 13; i<board.length; i ++){
        for(j = 0; j<board[i].length; j++){
            if(board[i][j] !== null){
                board[i][j] = {player1}
                console.log('i made it')
            }
        }
    };

    console.log(board)
}

function updateDOMBoard(){
    boardPositionElements.forEach(element => {
        const row = parseInt(element.getAttribute('data-row'),10)
        const col = parseInt(element.getAttribute('data-col'),10)
        if(board[row][col] !== null){
            const newPiece = document.createElement('div')
            newPiece.className = 'piece'
            element.appendChild(newPiece)
        }
    })
}