document.addEventListener("DOMContentLoaded", function () {

    const colorBox = document.getElementById("color-area");
    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");
    const generateBtn = document.getElementById("generate-btn");

    const maxSaved = 15;
    let savedCounter = 0;

    let colorBoxes = [];

    function isEveryInputValid() {
        let redCheck = isValueValid(redInput.value);
        let greenCheck = isValueValid(greenInput.value);
        let blueCheck = isValueValid(blueInput.value);

        if (redCheck === true && greenCheck === true && blueCheck === true) {
            return true;
        }
        else return false;
    }

    function isValueValid(inputValue) {
        let check = parseInt(inputValue);
        if (check != null && (check >= 0 && check <= 255)) {
            return true;
        } else return false;
    }

    function saveColor(rgb) {
        if (savedCounter < maxSaved) {
            let newColorBox = document.createElement("div");
            newColorBox.style.backgroundColor = rgb;
            newColorBox.classList.add("saved-color");
            
            document.getElementById("saved-content").prepend(newColorBox);

            colorBoxes.push(newColorBox);

            savedCounter++;
        } else {
            let oldColorBox = colorBoxes.shift();
            document.getElementById("saved-content").removeChild(oldColorBox);

            savedCounter--;

            saveColor(rgb);
        }
    }

    function changeColor() {
        let validation = isEveryInputValid();

        if (validation) {
            red = parseInt(redInput.value);
            green = parseInt(greenInput.value);
            blue = parseInt(blueInput.value);

            let rgb = `rgb(${red}, ${green}, ${blue})`

            colorBox.style.backgroundColor = rgb;

            saveColor(rgb)
        } else {
            alert('Введите число от 0 до 255!');
        }
    }

    generateBtn.addEventListener("click", changeColor);


});