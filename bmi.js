const height = (document.querySelector(".height"));
const weight = (document.querySelector(".weight"));
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const calculateBmiButton = document.querySelector(".submit-button");

calculateBmiButton.addEventListener('click', ()=>{
    const newHeight = Number(height.value);
    const newWeight = Number(weight.value);
    console.log(newWeight);
    console.log(newHeight);

    const heightSquare = Math.pow(newHeight, 2);
    console.log(heightSquare);
    
    const bmi = Number(newWeight/heightSquare);
    if(height.value === '' || weight.value === ''){
        p1.textContent =`Please enter a value`
    }else if (newHeight === Number(height.value) && newWeight === Number(weight.value)){
        //  window.location.href = 'new.html';
    
        if(bmi >=25){
                 p2.textContent =`Your BMI is ${bmi} and you are over weight`;
                }else if(bmi > 29.9){
                    p2.textContent =`Your BMI is ${bmi} and you are obese`;
                 }else if(bmi <18.5){
                     p2.textContent = `Your BMI is ${bmi}, you are underweight`;
            
                 }else {
                     p2.textContent =`Your BMI is ${bmi}, you have a normal BMI`;
                }
         p2.textContent = `your bmi ${bmi}`;

    }
});
