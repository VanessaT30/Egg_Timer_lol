
let timerDisplay = document.getElementById("timer") as HTMLHeadingElement;
let startButton = document.getElementById("start") as HTMLButtonElement;
let pauseButton = document.getElementById("pause") as HTMLButtonElement;
let resetButton = document.getElementById("reset") as HTMLButtonElement;
let goBackButton = document.getElementById("cute-buttons") as HTMLButtonElement;


// parseInt(value, 10) converts a string to a number. || 0
let initialTime = parseInt(timerDisplay.getAttribute("data-time") || "0", 10);
console.log();

class Timer {
    private intervalId: number | null = null;
    seconds: number;

     constructor() {
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
         if (this.intervalId) return; // Prevent multiple timers from running

        this.intervalId = window.setInterval(() => {
            if (this.seconds > 0) { // if there is still time left.
                this.seconds--; // Reduces the time by 1 second every time setInterval() runs.
                this.updateDisplay();
            } 
            else {
                this.pause();
            }
        }, 1000) //The function inside setInterval() runs every 1000 milliseconds (1 second)
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
        this.seconds = initialTime;// Reset to initial time
        this.updateDisplay(); // Update the display
        }
}

// Create a Timer instance
const timer = new Timer(); // Start with 90 seconds

startButton.addEventListener("click", () => timer.start());
pauseButton.addEventListener("click", () => timer.pause());
resetButton.addEventListener("click", () => timer.reset());
goBackButton.addEventListener("click", () => {window.location.href = '/'});

