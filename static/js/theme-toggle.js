document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Verifica si el usuario ya tiene una preferencia guardada
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Defensive: the toggle may not exist on every page
    if (toggle) {
        toggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            // Guarda la preferencia en localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    } else {
        console.warn('theme-toggle: #dark-mode-toggle not found on this page');
    }
});

function toggleSidebarAdmin() {
    document.querySelector('.sidebar').classList.toggle('active');
}
