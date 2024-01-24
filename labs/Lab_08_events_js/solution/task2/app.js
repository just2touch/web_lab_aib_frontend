document.addEventListener("DOMContentLoaded", function () {

    const colorBox = document.getElementById("color-area");
    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");

    function isValueValid(inputValue) {
        let check = parseInt(inputValue);
        if (check != null && (check >= 0 && check <= 255)) {
            return true;
        } else return false;
    }

    function changeColor() {
        let validation = isValueValid(this.value);

        if (validation) {
            red = parseInt(redInput.value);
            green = parseInt(greenInput.value);
            blue = parseInt(blueInput.value);

            colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        } else {
            alert('Введите число от 0 до 255!');
        }
    }

    redInput.addEventListener('input', changeColor);
    greenInput.addEventListener('input', changeColor);
    blueInput.addEventListener('input', changeColor);


});