let map;
let lines = [];
let lineLengths = [];
let correctCount = 0;
let wrongCount = 0;

function initMap() {
    const bounds = [[-85, -180], [85, 180]]; // World bounds

    map = L.map('mapCanvas', {
        worldCopyJump: false,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0
    }).setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 2
    }).addTo(map);

    initGame();
}

function initGame() {
    // Clear existing lines and reset UI
    lines.forEach(line => map.removeLayer(line));
    lines = [];
    document.getElementById('result').textContent = "";
    document.getElementById('guessOptions').style.display = 'block';

    // Create new random red and blue lines with lengths between 8000 km and 11000 km
    const line1 = createRandomLine('red', 8000, 11000);
    const line2 = createRandomLine('blue', 8000, 11000);

    // Calculate lengths of the lines in kilometers
    const line1Length = calculateDistance(line1.getLatLngs()) / 1000; // km
    const line2Length = calculateDistance(line2.getLatLngs()) / 1000; // km
    lineLengths = [line1Length, line2Length];

    // Add lines to map
    lines.push(line1, line2);
    lines.forEach(line => line.addTo(map));
}

function createRandomLine(color, minLengthKm, maxLengthKm) {
    const startLatLng = [Math.random() * 120 - 60, Math.random() * 240 - 120];
    const angle = Math.random() * 2 * Math.PI;
    const lengthInKm = Math.random() * (maxLengthKm - minLengthKm) + minLengthKm;

    const endLatLng = [
        Math.max(-85, Math.min(85, startLatLng[0] + (lengthInKm / 110.574) * Math.sin(angle))),
        Math.max(-180, Math.min(180, startLatLng[1] + (lengthInKm / (111.320 * Math.cos(startLatLng[0] * Math.PI / 180))) * Math.cos(angle)))
    ];

    const line = L.polyline([startLatLng, endLatLng], {
        color: color,
        weight: 4,
    });

    const midpoint = [
        (startLatLng[0] + endLatLng[0]) / 2,
        (startLatLng[1] + endLatLng[1]) / 2
    ];
    map.panTo(midpoint);

    return line;
}

function calculateDistance(latLngs) {
    let distance = 0;
    for (let i = 0; i < latLngs.length - 1; i++) {
        distance += latLngs[i].distanceTo(latLngs[i + 1]);
    }
    return distance;
}

function makeGuess(option) {
    const line1Length = lineLengths[0]; // Red line
    const line2Length = lineLengths[1]; // Blue line

    // Determine if the guess is correct
    const correct = (option === 'blue' && line2Length > line1Length) || (option === 'red' && line1Length > line2Length);

    // Update counters based on answer correctness
    if (correct) {
        correctCount++;
        document.getElementById('correctCount').textContent = correctCount;
    } else {
        wrongCount++;
        document.getElementById('wrongCount').textContent = wrongCount;
    }

    // Display the result and lengths of the lines
    const resultText = correct 
        ? `Correct! The Blue line is ${line2Length.toFixed(2)} km and the Red line is ${line1Length.toFixed(2)} km.` 
        : `Incorrect. The Blue line is ${line2Length.toFixed(2)} km and the Red line is ${line1Length.toFixed(2)} km.`;
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultText;

    // Apply flash effect based on correctness
    if (correct) {
        resultElement.classList.add('flash-correct');
    } else {
        resultElement.classList.add('flash-incorrect');
    }

    // Check if the wrong count has reached 3 and display warning message
    if (wrongCount >= 3) {
        setTimeout(() => {
            alert("Game Over! You reached 3 incorrect guesses. Try Again !!!");
            // Reset the game when the user gets 3 wrong answers
            correctCount = 0;
            wrongCount = 0;
            document.getElementById('correctCount').textContent = correctCount;
            document.getElementById('wrongCount').textContent = wrongCount;
            initGame();
        }, 2000);
    }

    // Hide guess buttons and show the result
    document.getElementById('guessOptions').style.display = 'none';

    // Automatically refresh the game after a delay, removing the flash class before reset
    setTimeout(() => {
        resultElement.classList.remove('flash-correct', 'flash-incorrect');
        if (wrongCount < 3) {
            initGame();
        }
    }, 2000);
}

// Call initMap on window load
window.onload = initMap;
