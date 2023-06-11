### EggMan Game README
## Introduction
EggMan Game is a simple web-based game created using React. The game involves a character named EggMan and a basket full of eggs. The player's objective is to catch eggs with EggMan by moving them with the mouse or touch.

## Features
- The game area takes up the whole browser window.
- The player starts with a certain number of eggs.
- The player can catch eggs by moving them using mouse drag or touch gestures.
- The score increments by 1 for each egg successfully caught by EggMan.
- When the score reaches 10, a popup message is displayed.
- When the player runs out of eggs, they are given an option via a popup to purchase an additional 80 eggs.

## Setup

# Prerequisites
Node.js

## Installation
# Clone the repository:
git clone <repository_url>

# Navigate to the project directory:
cd EggManGame

# Install the dependencies:
npm install
Running the Application

# To start the application, run:
npm start

# Open your web browser and go to:

http://localhost:3000

## How to Play
- Click or touch the basket to create an egg.
- Drag the egg to EggMan.
- Release the mouse button or remove your finger from the screen to drop the egg.
- If the egg collides with EggMan, the score will increment.
- The game displays a popup when you successfully catch 10 eggs.
- If you run out of eggs, a popup will ask if you want to buy more.

# Code Structure
The main React component for the game is EggManGame. This component handles the game logic and renders the game elements.

handleMouseDown: Handles the creation of an egg when the mouse button is pressed or the screen is touched.
handleMouseMove: Moves the egg with the mouse or touch.
handleMouseUp: Handles the release of the egg and checks for collision with EggMan.
isColliding: Utility function to check if two DOM elements are colliding.
handleEggPackSubmit: Handles the response when the player is asked if they want to buy more eggs.

## Customizing the Game
You can customize the game by modifying the following:
EggManGame.css: Contains the styling for the game elements. You can modify this file to change the appearance of the game.
Number of eggs, dimensions, colors, etc. can be adjusted in the EggManGame component.
Contributing
Contributions are welcome. Please open an issue or submit a pull request for any contributions.

## License
This project is open-source. Check the LICENSE file for more information.
