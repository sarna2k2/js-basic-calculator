const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstValue = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");

        // Number or decimal
        if (val !== null) {
            currentInput += val;
            display.value = currentInput;
        }

        // Clear button
        if (btn.classList.contains("clear")) {
            currentInput = "";
            firstValue = "";
            operator = "";
            display.value = "";
        }

        // Operator
        if (btn.classList.contains("op")) {
            if (currentInput === "") return;
            firstValue = currentInput;
            operator = val;
            currentInput = "";
        }

        // Equals
        if (btn.classList.contains("equals")) {
            if (firstValue === "" || operator === "" || currentInput === "") return;

            const result = eval(`${firstValue} ${operator} ${currentInput}`);
            display.value = result;

            // Reset for next calculation
            currentInput = result.toString();
            firstValue = "";
            operator = "";
        }
    });
});
