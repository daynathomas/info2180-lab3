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

    // Define winning conditions for the game
    const winningConditions = [
        [0, 1, 2],
        [1, 4, 7],
        [2, 4, 6],
        [3, 4, 5],
        [2, 5, 8],
        [0, 4, 8],
        [6, 7, 8],
        [0, 3, 6],
    ];

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

    // Function to check if a player has won
    function checkWin() {
        for (let conditionIndex = 0; conditionIndex <= 7; conditionIndex++) {
            const winCondition = winningConditions[conditionIndex];
 
            const position1 = squareValues[winCondition[0]];
            const position2 = squareValues[winCondition[1]];
            const position3 = squareValues[winCondition[2]];

            // Check if the positions are not empty and match
            if (position1 !== '' && position1 === position2 && position2 === position3) {
                // Display the winner's name and add the "you-won" class to the status element
                statusElement.innerHTML = 'Congratulations! ' +  position1 + ' is the winner';
                statusElement.classList.add('you-won');
                break;
            }
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
}