
    //my way
    
        // function getRandomColor() {
        //             const letters = '0123456789ABCDEF';
        //             let color = '#';
        //             for (let i = 0; i < 6; i++) {
        //                 color += letters[Math.floor(Math.random() * 16)];
        //             }
        //             return color;
        //         }    
    
        //         function changeColors() {
        //             // Change button color
        //             document.getElementById('start-btn').style.backgroundColor = getRandomColor();    
    
        //             // Change background color
        //             document.body.style.backgroundColor = getRandomColor();    
    
        //             // Start changing the background color at intervals
        //             setInterval(function() {
        //                 document.body.style.backgroundColor = getRandomColor();
        //             }, 1500);
        //         }    
    
        //         document.getElementById('start-btn').addEventListener('click', function() {
        //             changeColors();
        //             // Remove the event listener to prevent further clicks
        //             document.getElementById('start-btn').removeEventListener('click', arguments.callee);
        //         });
         



        //Tarmeez way

        function changeColor(){
    
            document.getElementById("startBtn").style.backgroundColor = generateRandomColor()
           
    
            setInterval(function(){
    
                document.getElementById("bg").style.backgroundColor = generateRandomColor()
            }, 1500)
    
            setInterval(function(){
    
                document.getElementById("startBtn").style.borderColor = generateRandomColor()
             },800)
    
             document.getElementById("startBtn").removeEventListener('click', arguments.callee);
        }
    
        function generateRandomNumber(){
            return Math.random() * 250
        }
    
        function generateRandomColor(){
            var randomR = generateRandomNumber()
            var randomG = generateRandomNumber()
            var randomB = generateRandomNumber()
    
           return `rgb(${randomR}, ${randomG}, ${randomB})`
        }
    
     