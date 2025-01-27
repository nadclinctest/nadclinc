window.onload = () => {
    let button = document.querySelector("#btn");
    
    // Function for calculating BMI
    button.addEventListener("click", calculateBP);
    };
    
    function calculateBP() {
    
        /* Getting input from user into height variable.
        Input is string so typecasting is necessary. */
        let BP = parseInt(document
                .querySelector("#BP").value);
        
        /* Getting input from user into weight variable. 
        Input is string so typecasting is necessary.*/
        let is_diabetes = parseInt(document
                .querySelector("#Is_diabetes").value);
        
        let result = document.querySelector("#result");
        
        // Checking the user providing a proper
        // value or not
        if (!BP || isNaN(BP)) 
            result.innerHTML = "Provide a valid Height!";
        
        else if (!is_diabetes || isNaN(BP) || is_diabetes>1) 
            result.innerHTML = "Provide a valid Weight!";
        
        // If both input is valid, calculate the bmi
        else if(is_diabetes==0){
        
            // Dividing as per the bmi conditions
            if (BP < 3.0) result.innerHTML =
                `Low blood sugar, you should check for Hypoglycemia`;
        
            else if (BP > 7.8) 
                result.innerHTML = 
                    `High blood sugar, you should check for prediabetes`;
        
            else result.innerHTML =
                `Normal blood sugar`;
        }
        else{
            // Dividing as per the bmi conditions
            if (BP < 4.0) result.innerHTML =
                `Low blood sugar, you should check for Hypoglycemia`;
        
            else if (BP > 11) 
                result.innerHTML = 
                    `High blood sugar, you should check for prediabetes`;
        
            else result.innerHTML =
                `Normal blood sugar`;
        }   
    }