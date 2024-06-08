// Rika.js

document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good afternoon!";
    } else {
        greetingMessage = "Good evening!";
    }

    greetingElement.textContent = greetingMessage;

    // Inspirational Quotes for Clients
    const quotes = [
        "Relax, release, and renew.",
        "Find your inner peace.",
        "Your body deserves the best care.",
        "Healing starts from within.",
        "Embrace the serenity within you.",
        "Rejuvenate your mind, body, and spirit."
    ];

    const quoteElement = document.createElement("p");
    quoteElement.className = "quote";
    quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".bio-content").appendChild(quoteElement);
});
