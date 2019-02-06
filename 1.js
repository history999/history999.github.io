var valueTimer = null;
      var sec = -1;
      var m=0;
      var h=0;

      function start() {
        
sec++;
          document.getElementById("seconds").innerHTML = sec;
          valueTimer = setTimeout("start()", 1000);
          localStorage.setItem('local', sec);
          localStorage.setItem('local1', m);
          localStorage.setItem('local2', h);


        if(sec == 60){
          m++;
          
          document.getElementById("minute").innerHTML = m;
          clearTimeout(valueTimer);
          sec =0;

          if(m == 60){
          h++;
          
          document.getElementById("hour").innerHTML = h;
          clearTimeout(valueTimer);
          h=0;
        }
        }

      }

      

function pause() {
        clearTimeout(valueTimer);
      }



     function stop() {
      var stopResult = confirm("Ви дійсно хочете завершити це завдання та записати результат?");  
        clearTimeout(valueTimer);
       if(stopResult == true){     
          document.getElementById("start").disabled = true;
          document.getElementById("pause").disabled = true;
          document.getElementById("stop").disabled = true;
          document.getElementById("task").disabled = true;
          
          
       }

      }


    window.onload = function() {



var local_value = localStorage.getItem('local');
document.getElementById("seconds").innerHTML = local_value;

var local_value1 = localStorage.getItem('local1');
document.getElementById("minute").innerHTML = local_value1;

var local_value2 = localStorage.getItem('local2');
document.getElementById("hour").innerHTML = local_value2;
    }