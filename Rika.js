document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.classList.add('fade-out');
    }, 3000); // Adjust the timeout duration as needed
});
