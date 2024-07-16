  /*function calculateBMI() {
   var weight = document.getElementById('weight').value;
   var height = document.getElementById('height').value;

   if (weight && height) {
       // Convert height to meters from cm if necessary
       if (height > 3) { 
           height = height / 100; 
       }

       var bmi = weight / (height * height);

       // Display the result
       if (bmi <=18) {
           document.getElementById('result').innerText = 'You are skinny your BMI:' + bmi.toFixed(2);
       } 
       else if (bmi >=18 && bmi <24.9) {
           document.getElementById('result').innerText = 'Your body mass is perfect, your BMI:' + bmi.toFixed(2);
       }
       else if (bmi >=25 && bmi <29.9) {
           document.getElementById('result').innerText = 'Your body mass is light fat, your BMI:' + bmi.toFixed(2);
       }
       else if (bmi >=30 && bmi <34.9) {
           document.getElementById('result').innerText = 'Your body mass is normal fat, your BMI:' + bmi.toFixed(2);
       }
       else if (bmi >=35 && bmi <39.9) {
           document.getElementById('result').innerText = 'Your body mass is fat fat, your BMI:' + bmi.toFixed(2);
       }
       else if (bmi > 40) {
           document.getElementById('result').innerText = 'You are in denger see a doctor, your BMI:' + bmi.toFixed(2);
       }else {
           document.getElementById('result').innerText = 'Please enter valid numbers for weight and height.';
       }
       } else {
       document.getElementById('result').innerText = 'Please enter both weight and height.';
       }
   }
       */














  /* document.getElementById("submit-btn").addEventListener("click", function() {
   var weight = document.getElementById("weight-input").value
   var height = document.getElementById("Height-input").value

   var bmi = weight / (height*height)

   document.getElementById("bmi").innerHTML = bmi

   var bmiCategory = "Underweight"

   if(bmi < 18){
       bmiCategory ="Underweight"
   }
   else if(bmi <24.9){
       bmiCategory ="Normal weight"
   }
   else if(bmi <29.9){
       bmiCategory ="Overweightt"
   }
   else if(bmi <34.9){
       bmiCategory ="Overweight Lvl 1"
   }
   else if(bmi <39.9){
       bmiCategory ="Overweight Lvl 2"
   }
   else{
       bmiCategory ="Danger weight"
   }

   document.getElementById("bmi-category").innerHTML= bmiCategory
})*/
   