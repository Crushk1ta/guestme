
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random number:", randomNumber);

    // Function to check the guessed number
    function checkGuess() {
        // Get the user's guessed number
        const guess = parseInt(document.getElementById('guessInput').value);

        // Validate if the input is a number and within range
        if (isNaN(guess) || guess < 1 || guess > 100) {
            setMessage('Please enter a valid number between 1 and 100.', 'red');
            return;
        }

        // Check if the guess is correct
        if (guess === randomNumber) {
            setMessage(`Congratulations! You guessed the correct number ${randomNumber}.`, 'green');
        } else {
            // Provide feedback based on the guess
            let message;
            if (guess < randomNumber) {
                message = 'Too low. Try again!';
            } else {
                message = 'Too high. Try again!';
            }
            setMessage(message, 'blue');
        }
    }

    // Function to set message and color
    function setMessage(msg, color) {
        document.getElementById('message').textContent = msg;
        document.getElementById('message').style.color = color;
    }
