window.onload = function () {
  
    var hours = 0;
    var minutes = 0;
    var seconds = 0; 


    var appendHours = document.getElementById("hours")
    var appendMinutes = document.getElementById('minutes')
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
    var consolePls = document.getElementById('consola-pls');
    let timp 
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();


    consolePls.onclick = function() {
        timp = `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`
        console.log(timp)
    }
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 1000);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      hours = '00';
      minutes = '00'; 
      seconds = "00";
      appendHours.innerHTML = hours;
      appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
        seconds++; 
        
        if(seconds <= 9){
          appendSeconds.innerHTML = "0" + seconds;
        }
        
        if (seconds > 9){
          appendSeconds.innerHTML = seconds;
          
        } 
        
        if (seconds > 59) {
          console.log("seconds");
          minutes++;
          appendMinutes.innerHTML = "0" + minutes;
          seconds = 0;
          appendSeconds.innerHTML = "0" + 0;
        }
        
        if (minutes > 59){
            console.log("minutes");
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
            appendMinutes.innerHTML = "0" + 0;
        }
      
      }
    
  
  }