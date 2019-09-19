
function transitionMenu() {
    let upper_bar = document.getElementById("upper_bar");
    let lower_bar = document.getElementById("lower_bar");
    let menu_icon = document.getElementById("toggle-menu");
    let menu_button = document.getElementById("menu-anchor");

    console.log(menu_button.className);

    if ( menu_button.className == "menu_closed" ) {
        console.log(" opening the menu. ");
        menu_icon.setAttribute("style", "opacity: 0.05");
        upper_bar.setAttribute("style", "transform: matrix(0.8, 0.8, -0.5, 0.8, 0, 16)");
        lower_bar.setAttribute("style", "transform: matrix(0.8, -0.8, 0.5, 0.8, 0, -15)");
        menu_button.setAttribute("class", "menu_opened");
    } else if ( menu_button.className == "menu_opened" ) {
        console.log(" closing the menu. ");
        upper_bar.setAttribute("style", "transform: matrix(0.8, 0, 0, 0.8, 0, 0)");
        lower_bar.setAttribute("style", "transform: matrix(0.8, 0, 0, 0.8, 0, 0)");
        menu_button.setAttribute("class", "menu_closed");
        menu_icon.setAttribute("style", "opacity: 1");
    }
}