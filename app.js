window.onload = function() {
function displayTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
   // get time of day (am or pm) 
    var meridiem = 'am';
    if (hours >= 12 && hours < 24) {
    meridiem = 'pm';
  } 

    // If the hours digit is less than 10
    if(hours < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    hours = "0" + hours;
    }

    // convert hours from 24-hour time to 12-hour time
  if(hours > 12) { 
    hours = hours - 12;
  }

    // Format minutes and seconds the same way
    if(minutes < 10) {
    minutes = "0" + minutes;
    }        
    if(seconds < 10) {
    seconds = "0" + seconds;
    }
    
    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

    // This runs the displayTime function the first time
    displayTime();
    
    // This makes our clock 'tick' by repeatedly
    // running the displayTime function every second.
    setInterval(displayTime, 1000);

};
