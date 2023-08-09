function calculateIMC() {
    const weight = document.getElementById("inputWeight").value;
    const height = document.getElementById("inputHeight").value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById("value");
        let description = "";

        value.classList.add("attention");

        document.getElementById("infos").classList.remove("hidden");

        if (bmi < 18.5) {
            description = "Cuidado! Você está abaixo do peso!";
        } else if (bmi >= 18.5 && bmi < 25) {
            description = "Perfeito! Você está no peso ideal!";
            value.classList.remove("attention");
            value.classList.add("normal");

        } else if (bmi >= 25 && bmi < 30) {
            description = "Cuidado! Você está acima do peso!";
        } else {
            description = "Cuidado! Você está com muito sobrepeso!"
        }

        document.getElementById("value").textContent = bmi;
        document.getElementById("description").textContent = description;
    }
}