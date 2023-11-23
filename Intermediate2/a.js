const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const age = parseInt(document.getElementById("age").value)
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');
    const message2 = document.querySelector('#message');

    const results2 = document.getElementById('results2');

    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        results2.innerHTML = "Please provide a valid height";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results2.innerHTML = "Please provide a valid weight";
    }else if (age === '' || weight < 0 || isNaN(age)){
        results2.innerHTML = "Please provide your age";
    }else{
        if( document.getElementById("male").checked){
            const bmr = ((10 * weight) + (6.25 *height) - (5*age) +5);
            results2.innerHTML = `Your body need <br><span>${bmr}</span> calories <br>to performs basic life-sustaining function.`
        }
        else{
            const bmr = (10 * weight) + (6.25 *height) - (5*age) -161;
            results2.innerHTML = `Your body need <br><span>${bmr}</span> calories <br>to performs basic life-sustaining function.` 
        }
    }




    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please provide a valid weight";
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the results
        results.innerHTML = `<span>${bmi}</span>`

        // Display End Message
        if (bmi < 18.6) {
            message.innerHTML = "You are underweight";
        } else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Normal"
        } else if (bmi > 24.9) {
            message.innerHTML = "You are Overweight"
        }
    }
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }