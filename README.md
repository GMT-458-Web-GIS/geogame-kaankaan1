# Geo-Game Design

## Objective

This geo-game demonstrates the distortions that arise when representing Earth's geoid shape on a flat map. The purpose is to illustrate how distances can be visually misleading on a flat map compared to their real-world measurements on Earth's curved surface. For instance, a line that looks longer on a map may, in reality, be shorter due to map projection distortions. 

The game challenges players to estimate and understand such discrepancies by visually comparing two lines of different lengths and guessing which is longer.

---

## Game Mechanics

- **Random Lines**: Two lines (one red and one blue) are drawn randomly across the map. Their true lengths are calculated based on geographic coordinates.
- **Player Guess**: Players choose which line they believe is longer based on visual appearance.
- **Feedback**: After each guess, the actual lengths of both lines are revealed, and feedback indicates whether the guess was correct or incorrect.
- **Counters**: A correct/incorrect counter updates after every round. The game ends when the player accumulates 3 incorrect guesses, and a message appears on the screen.

---

## Visuals

### 1. **Game Logic**
This visual demonstrates the core concept of the game: the stick that looks longer may turn out to be shorter due to map projection distortions.

[Screenshot_4](https://github.com/user-attachments/assets/7215fac5-ba56-42f8-b290-875f414ae577)


---

### 2. **Incorrect Answer Feedback**
When a player guesses incorrectly, the game provides feedback showing the correct answer and the actual lengths of both lines.

[Screenshot_5](https://github.com/user-attachments/assets/ec968043-4a4b-4d64-ba52-3fe044242087)
 

---

### 3. **Correct/Incorrect Counter**
The game keeps track of correct and incorrect answers. Once 3 incorrect answers are reached, the game ends, and a message appears.

[Screenshot_6](https://github.com/user-attachments/assets/e83f1599-0003-473b-97a8-262eda9da369)

---

## Requirements

### 1. **Frontend Requirements**
- **Interactive Map**: Display a world map where two lines (red and blue) are drawn randomly.
- **Player Interaction**: Provide buttons to let players guess which line is longer.
- **Feedback Display**: Show whether the player's guess was correct or incorrect, along with the actual lengths of the lines.
- **Counters**: Track and display correct and incorrect answers on the screen.
- **Game End Condition**: End the game and display a message when the player accumulates 3 incorrect guesses.

### 2. **Layout**
- **Map Canvas**: Centrally placed and occupies most of the screen for optimal visibility.
- **Guess Buttons**: Positioned below the map, enabling easy interaction.
- **Feedback Section**: Displays the results of the player's guess and provides actual line lengths.
- **Counter Display**: Fixed at the top-right corner, always visible, and unobtrusive.

---

## JavaScript Library Selection

This game uses **Leaflet.js**, an open-source JavaScript library for interactive maps. Leaflet integrates well with OpenStreetMap and provides a lightweight, responsive, and user-friendly experience suitable for this game's requirements.

---

## How to Run the Game

1. Open the project directory and launch the `index.html` file in any modern web browser.
2. Interact with the map to play the game. The game auto-refreshes after each guess, resetting with new lines.
3. The game ends after 3 incorrect guesses, and a message appears summarizing the player's performance.

---

## Educational Value

This game is an engaging way to explore geographical distortions caused by map projections. By visually comparing line lengths, players develop an intuitive understanding of how Earth's curvature impacts distance representation.

