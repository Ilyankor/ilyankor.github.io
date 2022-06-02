const currentTheme = localStorage.getItem("theme");
var elem = document.getElementById("themebutton");

if (currentTheme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    elem.value = "light";
}
else {
    elem.value = "dark";
}

function lightdark() {
    var temptheme = document.documentElement.getAttribute("data-theme");

    if (temptheme=="dark") {
        document.documentElement.setAttribute("data-theme","light");
        theme = "light"
        elem.value = "dark";
    }
    else { 
        document.documentElement.setAttribute("data-theme", "dark");
        theme = "dark"
        elem.value = "light";
    }

    localStorage.setItem("theme", theme);
    const currentTheme = localStorage.getItem("theme");
}

function removeColor(event) {
    !event.target.classList.contains("no-hover") && event.target.classList.add("no-hover")
    event.target.addEventListener("mouseleave", () => {
        event.target.classList.remove("no-hover")
    })
}