// Prompt the user for their name
var userName = prompt("What is your name?");

// Check if the user entered a name
if (userName !== null && userName !== "") {
    // If a name is provided, greet the user
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    alert("Hello! Welcome to our website.");
}
