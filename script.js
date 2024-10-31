function toggleMenu() {
    var menu = document.getElementById("menuItems");
    menu.classList.toggle("open");
}

// Form submission handler
document.getElementById("loginForm").onsubmit = async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch(event.target.action, {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        alert("Login successful!");
        window.location.href = '/dashboard';  // Redirect to the dashboard on success
    } else {
        alert("Login failed. Please check your credentials.");
    }
};

document.getElementById("registerForm").onsubmit = async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch(event.target.action, {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        alert("Registration successful! You can now log in.");
        window.location.href = '/login';
    } else {
        alert("Registration failed. Please check your inputs.");
    }
};
