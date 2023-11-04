var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
    initTheme();
    darkSwitch.addEventListener("change", function () {
        console.log(darkSwitch.selected)
        resetTheme();
    });
});


function initTheme() {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  var darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  darkSwitch.selected
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.removeAttribute("data-theme");
}


function resetTheme() {
  if (darkSwitch.selected) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  }
}