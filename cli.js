function generateRandomNumbers(numDice) {
  const diePatterns = {
    die1: [
      [
        "┌─────────┐",
        "│         │",
        "│    ●    │",
        "│         │",
        "└─────────┘",
      ],
    ],
    die2: [
      [
        "┌─────────┐",
        "│  ●      │",
        "│         │",
        "│      ●  │",
        "└─────────┘",
      ],
    ],
    die3: [
      [
        "┌─────────┐",
        "│  ●      │",
        "│    ●    │",
        "│      ●  │",
        "└─────────┘",
      ],
    ],
    die4: [
      [
        "┌─────────┐",
        "│ ●     ● │",
        "│         │",
        "│ ●     ● │",
        "└─────────┘",
      ],
    ],
    die5: [
      [
        "┌─────────┐",
        "│ ●     ● │",
        "│    ●    │",
        "│ ●     ● │",
        "└─────────┘",
      ],
    ],
    die6: [
      [
        "┌─────────┐",
        "│ ●  ●  ● │",
        "│         │",
        "│ ●  ●  ● │",
        "└─────────┘",
      ],
    ],
  };

  // Animation function
  function animateDice(diceCount) {
    let counter = 0;
    const interval = setInterval(() => {
      console.clear();
      for (let i = 1; i <= diceCount; i++) {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        displayDiePattern(diePatterns[`die${randomNum}`]);
      }
      counter += 100; // increment counter by the interval time
      if (counter >= 1500) {
        // stop after 3 seconds
        clearInterval(interval);
        // Display the final dice values after the animation
        console.clear();
        displayFinalDice(diceCount);
      }
    }, 100); // update every 100 ms for a smoother animation
  }

  // Function to display final dice values
  function displayFinalDice(diceCount) {
    for (let i = 1; i <= diceCount; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      displayDiePattern(diePatterns[`die${randomNumber}`]);
    }
    console.log(`Rolled ${numDice} dice`)
  }

  animateDice(numDice);
}

function displayDiePattern(pattern) {
  for (let row of pattern[0]) {
    console.log(row);
  }
  console.log();
}

// Call the function to generate a set of five random numbers with animation
generateRandomNumbers(process.env.NUM_GAMES || 5);
