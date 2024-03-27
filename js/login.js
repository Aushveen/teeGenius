// Login form submission
const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
        // Send login request to the backend
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Login successful
            loginMessage.textContent = `Welcome, ${data.username}!`;
            // Store the username or email in local storage
            localStorage.setItem("user", data.username);
            // Redirect to the home page or any other page
            window.location.href = "index.html";
        } else {
            // Login failed
            loginMessage.textContent = "Invalid email or password. Please try again.";
        }
    } catch (error) {
        console.error("Error:", error);
        loginMessage.textContent = "An error occurred. Please try again later.";
    }
});

// Check if the user is logged in and display the username or email
const user = localStorage.getItem("user");
if (user) {
    const userElement = document.createElement("h4");
    userElement.textContent = user;
    document.querySelector("#nav").appendChild(userElement);
}