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

    // Attach event listeners to each square for user interaction
    gameSquares.forEach((square, position) => {
        // Handle clicks on the square
        square.addEventListener('click', () => handleUserAction(square, position));

        // Handle mouseover event to add the "hover" class
        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });

        // Handle mouseout event to remove the "hover" class
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });
    