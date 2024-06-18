document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.classList.add('fade-out');
        setTimeout(function() {
            document.querySelectorAll('.fade-in').forEach(function(element) {
                element.classList.add('visible');
            });
        }, 2000); // Wait for the welcome message to fade out before fading in other elements
    }, 3000); // Adjust the timeout duration as needed

    window.addEventListener("scroll", function() {
        const dropdown = document.querySelector(".dropdown");
        if (window.scrollY > 100) { // Adjust the scroll position threshold as needed
            dropdown.classList.add('transparent');
        } else {
            dropdown.classList.remove('transparent');
        }
    });
});
