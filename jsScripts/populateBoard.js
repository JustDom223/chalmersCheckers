
function isValidCell(row, col) {
    // Logic to determine if a cell at (row, col) is a valid, playable cell
    // You'll need to define this based on your board's layout
}

let board = [
    [null, null, null, null, {  }, null, null, null, null, null, null, null, null, null, null, null, null],//A4
    [null, null, null, null, {  }, {  }, null, null, null, null, null, null, null, null, null, null, null],//B4-5
    [null, null, null, null, {  }, {  }, {  }, null, null, null, null, null, null, null, null, null, null],//C4-6
    [null, null, null, null, {  }, {  }, {  }, {  }, null, null, null, null, null, null, null, null, null],//D4-7
    [{  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],
    [null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],
    [null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],
    [null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null, null],
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null, null],
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null, null],
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, null],
    [null, null, null, null, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }, {  }],
    [null, null, null, null, null, null, null, null, null, {  }, {  }, {  }, {  }, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, {  }, {  }, {  }, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, {  }, {  }, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null, {  }, null, null, null, null],
];

// for (i = 0; i < board.length; i++){
    //     console.log(board[i].length)
    // }
boardPositionElements = document.querySelectorAll('.boardCell')

boardPositionElements.forEach(element => {
    element.addEventListener('click', () =>{
        const row = parseInt(element.getAttribute('data-row'), 10);
        const col = parseInt(element.getAttribute('data-col'), 10);
        
        // Now you can use row and col to reference the correct position in gameBoard
        console.log(`Element at row ${row}, col ${col} was clicked`);
    })
})