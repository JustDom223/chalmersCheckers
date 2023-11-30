
function isValidCell(row, col) {
    // Logic to determine if a cell at (row, col) is a valid, playable cell
    // You'll need to define this based on your board's layout
}

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
    element.addEventListener('mouseover', () =>{
        const row = parseInt(element.getAttribute('data-row'), 10);
        const col = parseInt(element.getAttribute('data-col'), 10);
        const piece = 'X'
        // board[row][col][1]
        element.innerText = piece
        // Now you can use row and col to reference the correct position in gameBoard
        // console.log(`Element at row ${row}, col ${col} was clicked`);

    })
})