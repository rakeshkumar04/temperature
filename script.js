function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    const resultInput = document.getElementById("result");

    const temperatureValue = parseFloat(temperatureInput.value);

    if (!isNaN(temperatureValue)) {
        let result;

        // Perform temperature conversion based on selected units
        if (inputUnit === "celsius") {
            if (outputUnit === "fahrenheit") {
                result = (temperatureValue * 9/5) + 32;
            } else if (outputUnit === "kelvin") {
                result = temperatureValue + 273.15;
            } else {
                result = temperatureValue;
            }
        } else if (inputUnit === "fahrenheit") {
            if (outputUnit === "celsius") {
                result = (temperatureValue - 32) * 5/9;
            } else if (outputUnit === "kelvin") {
                result = ((temperatureValue - 32) * 5/9) + 273.15;
            } else {
                result = temperatureValue;
            }
        } else if (inputUnit === "kelvin") {
            if (outputUnit === "celsius") {
                result = temperatureValue - 273.15;
            } else if (outputUnit === "fahrenheit") {
                result = ((temperatureValue - 273.15) * 9/5) + 32;
            } else {
                result = temperatureValue;
            }
        }

        resultInput.value = result.toFixed(2);
    } else {
        resultInput.value = ""; // Clear the result if input is not a number
    }
}
