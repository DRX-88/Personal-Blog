// This sets the colour mode button icon based on the current color mode
function setColorModeButton() {
    const currentColorMode = document.body.getAttribute("data-bs-theme");
    const colormodeButtonIcon = document.getElementById("color-mode-icon");

    if (currentColorMode === "dark") {
        colormodeButtonIcon.classList.remove("bi-moon-stars-fill");
        colormodeButtonIcon.classList.add("bi-sun-fill");
     
    } else {
        colormodeButtonIcon.classList.remove("bi-sun-fill");
        colormodeButtonIcon.classList.add("bi-moon-stars-fill");

    }
}
// set the colour of background and text based on the current color mode
function switchColorMode() {
    const currentColorMode = document.body.getAttribute("data-bs-theme");

    if (currentColorMode === "dark") {
        document.body.setAttribute("data-bs-theme", "light");
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-light");
    } else {
        document.body.setAttribute("data-bs-theme", "dark");
        document.body.classList.remove("bg-light");
        document.body.classList.add("bg-dark");
    }

    setColorModeButton();
}

const colormodeButton = document.getElementById("color-mode-icon");
colormodeButton.addEventListener("click", switchColorMode);