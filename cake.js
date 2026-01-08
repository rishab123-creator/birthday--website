const messages = [
    "🎉 You are amazing!",
    "🎂 Wishing you endless happiness",
    "💖 You make life better",
    "🌟 Shine brighter every year",
    "🎁 You deserve the best",
    "🥳 Keep smiling always",
    "✨ Never stop dreaming",
    "🎊 Celebrate big today",
    "💫 You are special",
    "❤️ Loved more than you know",
    "🎈 Happiness looks good on you",
    "🌈 Joy follows you",
    "🕯️ Time is Best with you",
    "🎶 Always be yourself Bacha",
    "🌸 Keep blooming like the beautiful flower you are",
    "🎇 Make this year count more than any other ever",
    "💌 You matter the most in this whole world",
    "🌟 Believe in yourself because you are the best",
    "🥂 Cheers to you for always being you",
    "🎉 Happy Birthday! Mere Cutu always Love You"
];

const container = document.getElementById("messages");

messages.forEach(text => {
    const card = document.createElement("div");
    card.className = "message-box";

    const btn = document.createElement("button");
    btn.innerText = "Show";

    const msg = document.createElement("div");
    msg.className = "message hidden";
    msg.innerText = text;

    btn.onclick = () => {
        msg.classList.remove("hidden");
        btn.disabled = true;
        btn.innerText = "Shown";
    };

    card.appendChild(btn);
    card.appendChild(msg);
    container.appendChild(card);
});
