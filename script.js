// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Set default theme to dark mode
body.classList.remove("light-mode");
themeToggle.src = "images/Toggle theme/dark-mode-icon.png"; // Default icon for dark mode

// Toggle between dark and light modes
themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Change the toggle icon based on the current mode
    if (body.classList.contains("light-mode")) {
        themeToggle.src = "images/Toggle theme/light-mode-icon.png"; // Icon for light mode
    } else {
        themeToggle.src = "images/Toggle theme/dark-mode-icon.png"; // Icon for dark mode
    }
});

// Form submission functionality
const scriptURL = 'https://script.google.com/macros/s/AKfycbyiQ11Q3AO3E-m-fL3YLlbgu74AeVjxGxSSV6vLaqdAb0Smc_eTJLNALu3vODQQjCU1rA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});