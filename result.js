const urlParams = new URLSearchParams(window.location.search);
const bmi = urlParams.get("bmi");

const resultDiv = document.querySelector(".p2");

if (bmi !== null) {
    
    let message = `Your BMI is ${bmi}.`

    if (bmi >= 25){
        message += " You are overweight";
    } else if (bmi > 29.9){
        message += " You are obese";
    } else if (bmi < 18){
        message += " You are underweight";
    }else {
        message += " You are normal";
    }

    resultDiv.innerHTML = message;
} else {
    resultDiv.textContent = "No data";
}
