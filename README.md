Game: (https://gmt-458-web-gis.github.io/geogame-kaankaan1/about.html), Have Fun!
 


# Geo-Game Design

## Objective

This geo-game demonstrates the distortions that arise when representing Earth's geoid shape on a flat map. The purpose is to illustrate how distances can be visually misleading on a flat map compared to their real-world measurements on Earth's curved surface.

The game challenges players to estimate and understand such discrepancies by visually comparing two lines of different lengths and guessing which is longer.

Your goal is to achieve the highest number of correct answers while avoiding three mistakes. The game ends when you make three incorrect guesses.

---

## Game Mechanics

- **Random Lines**: Two lines (one red and one blue) are drawn randomly across the map. Their true lengths are calculated based on geographic coordinates.
- **Player Guess**: Players choose which line they believe is longer based on visual appearance.
- **Feedback**: After each guess, the actual lengths of both lines are revealed, and feedback indicates whether the guess was correct or incorrect.
- **Counters**: A correct/incorrect counter updates after every round. 
- **Game End Condition**: The game ends when the player accumulates three incorrect guesses. A message appears summarizing their performance and the number of correct answers achieved.

---

## Visuals

### 1. **Game Logic**
This visual demonstrates the core concept of the game: the stick that looks longer may turn out to be shorter due to map projection distortions.

 ![Screenshot_4](https://github.com/user-attachments/assets/2b1a5d98-34df-46db-8a1d-c0ad6317f3a5)


---

### 2. **Incorrect Answer Feedback**
When a player guesses incorrectly, the game provides feedback showing the correct answer and the actual lengths of both lines.

 ![Screenshot_5](https://github.com/user-attachments/assets/c28917ba-fad1-499a-8e59-be314c415d86)


---

### 3. **Correct/Incorrect Counter**
The game keeps track of correct and incorrect answers. Once three incorrect guesses are reached, the game ends, and a message appears.

 ![Screenshot_6](https://github.com/user-attachments/assets/aa44e554-4521-4482-aead-6d333b150e63)

## Advanced Features

### Event Handlers
The following event handlers were implemented:
1. **Button Click Handler**: Detects which button (red or blue) the player selects and processes their guess.
2. **Map Interaction Handler**: Adjusts the visual placement of lines when the map is resized or scrolled.
3. **Game Reset Handler**: Triggers a game reset after three incorrect guesses, refreshing the counters and lines.

### Use of Closures 
Closures were utilized to maintain private states for:
- The **correct/incorrect counters**, ensuring they are only modified through specific functions.
- The **game's end condition**, keeping track of the incorrect guesses without exposing the logic directly to global variables.

### Interaction with the DOM 
The game heavily interacts with the DOM by:
- Dynamically generating lines on the map and updating them based on player input.
- Displaying real-time feedback and updating counters for correct and incorrect answers.
- Adjusting the layout and visibility of elements (e.g., end-of-game messages) using DOM manipulation techniques.

---

## Requirements

### 1. **Frontend Requirements**
- **Interactive Map**: Display a world map where two lines (red and blue) are drawn randomly.
- **Player Interaction**: Provide buttons to let players guess which line is longer.
- **Feedback Display**: Show whether the player's guess was correct or incorrect, along with the actual lengths of the lines.
- **Counters**: Track and display correct and incorrect answers on the screen.
- **Game End Condition**: End the game and display a message when the player accumulates three incorrect guesses.

### 2. **Layout**
- **Map Canvas**: Centrally placed and occupies most of the screen for optimal visibility.
- **Guess Buttons**: Positioned below the map, enabling easy interaction.
- **Feedback Section**: Displays the results of the player's guess and provides actual line lengths.
- **Counter Display**: Fixed at the top-right corner, always visible, and unobtrusive.

---

## JavaScript Library Selection

This game uses **Leaflet.js**, an open-source JavaScript library for interactive maps. Leaflet integrates well with OpenStreetMap and provides a lightweight, responsive, and user-friendly experience suitable for this game's requirements.

---

## Educational Value

This game is an engaging way to explore geographical distortions caused by map projections. By visually comparing line lengths, players develop an intuitive understanding of how Earth's curvature impacts distance representation.
