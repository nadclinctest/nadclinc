window.onload = () => {
    let button = document.querySelector("#btn");

    // Function for calculating BMI
    button.addEventListener("click", calculateBMR);
};

function calculateBMR() {

    /* Getting input from user into height variable.
     * Input is string so typecasting is necessary. */
    let height = parseInt(document.querySelector("#height").value);

    /* Getting input from user into weight variable. 
     * Input is string so typecasting is necessary.*/
    let weight = parseInt(document.querySelector("#weight").value);

    let age = parseInt(document.querySelector("#age").value);

    let sex = parseInt(document.querySelector("#Sex").value);

    let result = document.querySelector("#result");

    // Checking the user providing a proper
    // value or not
    if (!height || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";

    else if (!weight || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";

    else if (!age || isNaN(age)) 
        result.innerHTML = "Provide a valid age!";

    else if (isNaN(sex)) 
        result.innerHTML = "Provide a valid Register of sex!"; 

    else if (sex === 0) {
        let bmr = (10 * weight + 6.25 * height + 5 * age - 161).toFixed(2);
        result.innerHTML = `Calorie intake: <span>${bmr}</span> kcal`;
    } 
    // If both input is valid, calculate the bmi
    else {
        // Fixing upto 2 decimal places
        let bmr = (10 * weight + 6.25 * height + 5 * age + 5).toFixed(2);
        result.innerHTML = `Calorie intake: <span>${bmr}</span> kcal`;
    }
}
