# Geo-Game Design 

**Objective**: This geo-game demonstrates the distortions that arise when representing Earth's geoid shape on a flat map. The purpose is to illustrate that distances on a flat map can appear misleading compared to real-world distances on Earth's curved surface. For instance, the distance across Africa might appear the same as across Russia on a map, even though the actual distances differ. This concept challenges the player to estimate and understand such discrepancies.

---

## Design of the Geo-Game

![9c18eabd-0cfa-4595-8a04-417f0a9c5472](https://github.com/user-attachments/assets/c0825a42-acf2-4dc5-bb4e-f980ffd2c454)


### Requirements

#### 1. Frontend Requirements
- Display a map with two lines of different lengths, drawn randomly across various locations.
- Allow players to guess which line is longer based on visual appearance.
- After each guess, reveal the actual lengths of each line and show feedback on whether the choice was correct or not.
- Maintain counters for correct and incorrect guesses.
- Include flashing feedback for correct answers in green and incorrect answers in red.
- The game auto-refreshes after each answer, resetting with new lines.

#### 2. Layout of Frontend
- **Map Canvas**: Located centrally and taking up most of the game screen.
- **Guess Buttons**: Below the map, with options to select which line (Red or Blue) the player believes to be longer.
- **Feedback Section**: Appears immediately after guessing, displaying the correct answer and actual distances.
- **Counter Display**: Fixed in the top-right corner, tracking correct and incorrect answers.

#### 3. JavaScript Library Selection
- I use **Leaflet** for this game. Leaflet is ideal for displaying interactive maps and works efficiently with OpenStreetMap, providing an engaging experience for players as they make geographic estimations.

 
