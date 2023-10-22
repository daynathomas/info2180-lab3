// Function to be executed when the window has finished loading
window.onload = function() {
    // Get references to important elements by their IDs or classes
    const statusElement = document.getElementById("status");
    const boardElement = document.getElementById("board");
    const startButton = document.getElementsByClassName("btn")[0];

    // Get all the individual squares on the game board
    const gameSquares = boardElement.querySelectorAll('div');


    // Set the class "square" to each square element on the game board
    for (let squareIndex = 0; squareIndex <= 8; squareIndex++) {
        gameSquares[squareIndex].setAttribute("class", "square");
    }
}
