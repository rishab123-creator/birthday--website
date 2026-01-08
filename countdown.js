const countdownEl = document.getElementById("countdown");
const goBtn = document.getElementById("goBtn");

// SET YOUR TARGET DATE HERE
const targetTime = new Date("2026-01-09T00:00:00").getTime();

const timer = setInterval(() => {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
        clearInterval(timer);
        countdownEl.innerText = "00:00:00";
        goBtn.style.display = "inline-block"; // SHOW BUTTON
        return;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerText =
        String(h).padStart(2, "0") + ":" +
        String(m).padStart(2, "0") + ":" +
        String(s).padStart(2, "0");
}, 1000);

// BUTTON NAVIGATION
goBtn.addEventListener("click", () => {
    window.location.href = "cake.html";
});

