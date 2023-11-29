function createBoard() {
    const rows = 17; // Total rows in your HTML structure
    const columns = 17; // Max columns at the widest part of the board

    let board = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            if (isValidCell(i, j)) {
                row.push({}); // Empty cell
            } else {
                row.push(null); // Non-playable space
            }
        }
        board.push(row);
    }

    return board;
}

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