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

    if(height.value === '' || weight.value === ''){
        p1.textContent = "please enter a value";
        return;
        
    }//else if (newHeight === Number(height.value) && newWeight === Number(weight.value)){
     //   return;
   // }

    const heightSquare = Math.pow(newHeight, 2);

    let bmi = newWeight/heightSquare;


    window.location.href = `result.html?bmi=${bmi}`;
});