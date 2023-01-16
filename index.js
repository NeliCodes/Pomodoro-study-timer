

var myTimer;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    
    
        setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
          clearInterval(timer);
            timer = null;
        }


        
      //  counter--;
      //if (timer >= 0) {
      //  span = document.querySelector("#time");
      //  span.innerHTML = timer;
     // }
      if (timer === 0) {
          alert('sorry, out of time');
          clearInterval(timer);
      }
        
     
      
        
    }, 1000);
  
};
function onTimesUp() {
  clearInterval(myTimer);
  myTimer = undefined;
}
function pauseTimer() {
  onTimesUp();
}


var firstBtn = window.document.getElementById("play").addEventListener("click", function () {
  
  
   var fiveMinutes = 60 * 45,
        display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
        document.querySelector("#time").style="color:green;";
        clearInterval(myTimer);
        myTimer = null;
        new Promise(function(resolve) {
          firstBtn.addEventListener("click", resolve);
        }).then(onClick);
        
  });

  console.log(myTimer);
 //
function refreshPage(){
  window.location.reload();
} 
    //
  
  

  //
  
  document.querySelector("#plus").addEventListener("click", function(){
    display = document.querySelector('.other');
  })
  //hide and open notes

  function openCardsList() {
    let window = document.querySelector(".other");
    window.style.display = "none";
  }
  function hideDiv(){
    
    let window = document.querySelector(".other");
    window.style.display = "block";
  }