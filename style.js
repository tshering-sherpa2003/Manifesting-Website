function displayMessage() {
    var message = document.querySelector('.text-area').value; // Get the content of the textarea

    // Display a message based on the textarea content
    if (message.trim() !== "") {
        document.getElementById("message-box").textContent = "Your manifestation has been sent to the universe!";
    } else {
        document.getElementById("message-box").textContent = "Please enter your manifestation to send it!";
    }
}

    // Add event listener for the "Enter" key
    document.getElementById("message-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            displayMessage();  // Trigger the submit message when Enter is pressed
            event.preventDefault(); // Prevent default action (e.g., new line in the textarea)
        }
    } 
);