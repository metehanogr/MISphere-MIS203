document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("errorMsg");

    if (user === "" || pass === "") {
        msg.textContent = "Please fill out all fields.";
    } 
    else if (pass.length < 4) {
        msg.textContent = "Password must be at least 4 characters.";
    } 
    else {
        msg.textContent = "";
        window.location.href = "index.html"; 
    }
});
