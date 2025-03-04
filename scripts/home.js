document.addEventListener("DOMContentLoaded", function () {
    const message = "Welcome to King of Kings MIC Farm Ltd";
    const welcomeElement = document.getElementById("welcome-message");
    let index = 0;

    function typeText() {
        if (index < message.length) {
            welcomeElement.textContent += message.charAt(index);
            index++;
            setTimeout(typeText, 40); // Adjust speed (lower is faster)
        }
    }

    typeText();
});


