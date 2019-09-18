
function transitionToX() {
    let top_bar = document.getElementById("upper_bar");
    let bottom_bar = document.getElementById("lower_bar");
    let menu_icon = document.getElementById("toggle-menu");
    
    console.log("Hello World.");

    menu_icon.setAttribute("style", "opacity: 0.05");
    top_bar.setAttribute("style", "transform: matrix(0.7, 0.8, -0.6, 0.6, 0, 20)");
    bottom_bar.setAttribute("style", "transform: matrix(0.7, -0.8, 0.6, 0.6, 0, -25)");
}