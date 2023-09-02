// Variables to store time values
let startTime = 0;
let interval;

// Function to update the stopwatch display
function updateStopwatch() {
  const currentTime = Date.now();
  const elapsedTime = new Date(currentTime - startTime);
  const hours = String(elapsedTime.getUTCHours()).padStart(2, "0");
  const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, "0");
  const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(elapsedTime.getUTCMilliseconds()).padStart(
    3,
    "0"
  );
  document.getElementById(
    "stopwatch"
  ).textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", () => {
  if (!interval) {
    startTime = Date.now() - (startTime ? startTime : 0);
    interval = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  startTime = 0;
  document.getElementById("stopwatch").textContent = "0:00:00.000";
});
