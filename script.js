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
      timp = `${hours}:${minutes}:${seconds}`
      const arrayDeTimp = [`${timp}`, `${year}/${month}/${day}`];
      console.log(arrayDeTimp)
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
        
        if(minutes <= 9){
          appendMinutes.innerHTML = "0" + minutes;
        }
        
        if (minutes > 9){
          appendMinutes.innerHTML = minutes;
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
  document.addEventListener('DOMContentLoaded', function() {
  function generateDaysInMonth() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = [];
  
    // Get the last day of the current month
    const lastDay = new Date(year, month + 1, 0).getDate();
  
    for (let day = 1; day <= lastDay; day++) {
      const formattedDate = `${year}/${month + 1}/${day}`; // Format: year/month/day
      daysInMonth.push(formattedDate);
    }
  
    return daysInMonth;
  }
  
  function displayDaysInList(daysArray) {
    console.log(daysArray)
    const ul = document.getElementById('daysList');
  
    daysArray.forEach(date => {
      const li = document.createElement('li');
      li.textContent = date;
      ul.appendChild(li);
    });
  }
  
  // Generate days and display in the HTML list
  const daysInMonth = generateDaysInMonth();
  displayDaysInList(daysInMonth);

  function displayHours(x) {
    const ulG = document.getElementById('oreG');
    const ulR = document.getElementById('oreR');
  
    x.forEach(date => {
      const liG = document.createElement('li');
      const liR = document.createElement('li');
      liG.textContent = `00:00:00`;
      liR.textContent = `00:00:00`;
      ulG.appendChild(liG);
      ulR.appendChild(liR);
    });
  }
  displayHours(daysInMonth)
  console.log(daysInMonth.length)
});

