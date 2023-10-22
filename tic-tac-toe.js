// Function to be executed when the window has finished loading
window.onload = function() {
    // Get references to important elements by their IDs or classes
    const statusElement = document.getElementById("status");
    const boardElement = document.getElementById("board");
    const startButton = document.getElementsByClassName("btn")[0];

    // Get all the individual squares on the game board
    const gameSquares = boardElement.querySelectorAll('div');

    // Initialize game variables
    let currentPlayer = 'X'; // Represents the current player ('X' or 'O')
    let squareValues = ['', '', '', '', '', '', '', '', '']; // Stores the values in each square

    // Set the class "square" to each square element on the game board
    for (let squareIndex = 0; squareIndex <= 8; squareIndex++) {
        gameSquares[squareIndex].setAttribute("class", "square");
    }
}

 // Function to handle user actions (clicking on a square)
 const handleUserAction = (square, position) => {
    if (square.innerText !== 'X' && square.innerText !== 'O') {
        // Set the current player's symbol in the square
        square.innerText = currentPlayer;
        square.classList.add(currentPlayer);
        squareValues[position] = currentPlayer;

        // Check if the current player has won
        checkWin();

        // Switch to the other player for the next move
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}