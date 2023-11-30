
function isValidCell(row, col) {
    // Logic to determine if a cell at (row, col) is a valid, playable cell
    // You'll need to define this based on your board's layout
}

let board = [
    [null, null, null, null, {  }, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, {  }, {  }, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, {  }, {  }, {  }, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, {  }, {  }, {  }, {  }, null, null, null, null, null, null, null, null, null],
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