let currentMeditation = null;
let messageDiv = document.getElementById("message");
let breakCount = 0;
let loggedInUser = null;

// Handle User Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        loggedInUser = username;
        document.getElementById("welcomeMessage").textContent = `Welcome, ${loggedInUser}! Start your mindfulness journey.`;
        document.getElementById("loginForm").style.display = 'none';
    }
});

// Play Meditation Audio
function playMeditation(meditationId) {
    if (currentMeditation) {
        currentMeditation.pause();
        currentMeditation.currentTime = 0;
    }

    currentMeditation = document.getElementById(meditationId);
    currentMeditation.play();

    messageDiv.innerHTML = "Enjoy your mindfulness break!";
    incrementProgress();
}

// Handle Player Controls
document.getElementById("playBtn").addEventListener("click", function () {
    if (currentMeditation) {
        currentMeditation.play();
        messageDiv.innerHTML = "Playing meditation...";
    }
});

document.getElementById("pauseBtn").addEventListener("click", function () {
    if (currentMeditation) {
        currentMeditation.pause();
        messageDiv.innerHTML = "Meditation paused.";
    }
});

document.getElementById("stopBtn").addEventListener("click", function () {
    if (currentMeditation) {
        currentMeditation.pause();
        currentMeditation.currentTime = 0;
        messageDiv.innerHTML = "Meditation stopped.";
    }
});

// Increment Break Count (Progress Tracker)
function incrementProgress() {
    breakCount++;
    document.getElementById("breakCount").textContent = breakCount;
}

// Custom Break Suggestions Based on Mood
function suggestBreak() {
    const mood = document.getElementById("mood").value;
    let suggestion = "";

    if (mood === "stressed") {
        suggestion = "Take a deep breath and try a 5-minute meditation to reduce stress.";
    } else if (mood === "tired") {
        suggestion = "Try a quick 2-minute energizing break to refresh your mind!";
    } else if (mood === "calm") {
        suggestion = "You seem calm! A 5-minute meditation can help maintain your inner peace.";
    } else if (mood === "focused") {
        suggestion = "You're focused! A quick 2-minute break can help you stay sharp.";
    }

    document.getElementById("suggestion").textContent = suggestion;
}
