function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        const outputText = `${fahrenheit} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
        document.getElementById('outputText').textContent = outputText;
    } else {
        document.getElementById('outputText').textContent = "Please enter a valid Fahrenheit temperature.";
    }
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const outputText = `${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
        document.getElementById('outputText').textContent = outputText;
    } else {
        document.getElementById('outputText').textContent = "Please enter a valid Celsius temperature.";
    }
}
