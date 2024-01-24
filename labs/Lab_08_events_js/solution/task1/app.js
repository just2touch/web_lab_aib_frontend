function changeColorToInput(rgb) {
    if (document.body.style.backgroundColor === rgb) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = rgb;
    }
}