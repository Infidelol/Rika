document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.classList.add('fade-out');
    }, 3000); // Adjust the timeout duration as needed

    window.addEventListener("scroll", function() {
        const dropdown = document.querySelector(".dropdown");
        if (window.scrollY > 100) { // Adjust the scroll position threshold as needed
            dropdown.style.zIndex = "-1";
        } else {
            dropdown.style.zIndex = "1";
        }
    });
});
