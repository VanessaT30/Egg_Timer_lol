"use strict";
let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let goBackButton = document.getElementById("cute-buttons");
// parseInt(value, 10) converts a string to a number. || 0
let initialTime = parseInt(timerDisplay.getAttribute("data-time") || "0", 10);
console.log();
class Timer {
    constructor() {
        this.intervalId = null;
        this.seconds = initialTime;
        this.updateDisplay();
    }
    updateDisplay() {
        let mins = Math.floor(this.seconds / 60);
        let secs = this.seconds % 60;
        // `${mins}:${secs < 10 ? "0" : ""}${secs}`;
        // or secs = secs < 10 : "0" + secs : secs
        timerDisplay.innerText = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }
    start() {
        if (this.intervalId)
            return; // Prevent multiple timers from running
        this.intervalId = window.setInterval(() => {
            if (this.seconds > 0) { // if there is still time left.
                this.seconds--; // Reduces the time by 1 second every time setInterval() runs.
                this.updateDisplay();
            }
            else {
                this.pause();
            }
        }, 1000); //The function inside setInterval() runs every 1000 milliseconds (1 second)
        // as unknown as number; //This forces TypeScript to treat it as a number.
    }
    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    reset() {
        this.pause();
        this.seconds = initialTime;
        this.updateDisplay();
    }
}
// Create a Timer instance
const timer = new Timer(); // Start with 90 seconds
startButton.addEventListener("click", () => timer.start());
pauseButton.addEventListener("click", () => timer.pause());
resetButton.addEventListener("click", () => {
    timer.pause();
    timer.seconds = initialTime; // Reset to initial time
    timer.updateDisplay(); // Update the display
    goBackButton.addEventListener("click", () => { window.location.href = '/'; });
});
