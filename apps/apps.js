

function radioDis() {
  if ('input[name="raceDistance"]:checked') {
    document.getElementById("distance").value = document.querySelector('input[name="raceDistance"]:checked').value;
    }
}

function calculateIt() {

    var distance = document.getElementById("distance").value;
    var tH = document.getElementById("tH").value;
    var tM = document.getElementById("tM").value;
    var tS = document.getElementById("tS").value;
    var minPerK = document.getElementById("minPerK").value;
    var secPerK = document.getElementById("secPerK").value;
    var paceSeconds = minPerK*60 + secPerK*1; 
    var timeSeconds = tH*3600 + tM*60 + tS*1;

    if (distance == 0) {
        calculateDistance();
    } else if (tH == 0 && tM == 0 && tS == 0) {
        calculateTime();
      }
      else if (minPerK == 0 && secPerK == 0) {
        calculatePace();
      }
      else {
        alert("Please fill 2 elements to calculate the 3rd.");
      }

    function calculateDistance() {
      calDistance = timeSeconds/paceSeconds;
      calDistance = Math.round((calDistance + Number.EPSILON) * 1000) / 1000;
      document.getElementById("distance").value = calDistance;
    }  

    function calculatePace() {
      calPace = timeSeconds/distance;
      minPerK = Math.floor(calPace/60);
      secPerK = Math.round(calPace%60);

      document.getElementById("minPerK").value = minPerK;
      document.getElementById("secPerK").value = secPerK;
    }
    
    function calculateTime() {
      calTime = paceSeconds*distance;
      tH = Math.floor(calTime/3600);
      calTime = calTime - tH*3600;
      tM = Math.floor(calTime/60);
      calTime = calTime - tM*60;
      tS = calTime%3600;
      document.getElementById("tH").value = tH;
      document.getElementById("tM").value = tM;
      document.getElementById("tS").value = tS;

    }

  }

  function clearDistance() {
    document.getElementById("distance").value = "";
    var checks = document.getElementsByName("raceDistance");
    for (i=0; i<checks.lenght; i++) {
        checks[i].removeAttribute("checked");
       
    }
    }

  function clearTime() {
    document.getElementById("tH").value = "";
    document.getElementById("tM").value = "";
    document.getElementById("tS").value = "";
  }

  function clearPace() {
    document.getElementById("minPerK").value = "";
    document.getElementById("secPerK").value = "";
  }

  function clearAll() {
    clearDistance();
    clearTime();
    clearPace();
  }

  const resultDistances = [1.5, 3, 5, 10, 15, 20, 21.098, 42.195, 50, 100];
  const resultTimes = [];
  let timeAlter;

 function basePace() {
  const resultTimes = [];

  var distance = document.getElementById("distance").value;
  var tH = document.getElementById("tH").value;
  var tM = document.getElementById("tM").value;
  var tS = document.getElementById("tS").value;
  var timeSeconds = tH*3600 + tM*60 + tS*1;

  if (distance == 0) {
    alert("Please enter distance!");
    return;
  } else if (tH == 0 && tM == 0 && tS == 0) {
    alert("Please enter time!");
    return;
  } 

    for (var i = 0; i < resultDistances.length; i++) {
      timeAlter = timeSeconds*Math.pow((resultDistances[i]/distance), 1.06);

      tH = Math.floor(timeAlter/3600);
      timeAlter = timeAlter - tH*3600;
      tM = Math.floor(timeAlter/60);
      timeAlter = (timeAlter - tM*60);
      tS = Math.round(timeAlter%3600);

      if (tH > 0) {
      var tempString = tH + " h " + tM + " m " + tS + " s";
      } else {
      var tempString = tM + " m " + tS + " s";
      }
      resultTimes.push(tempString);
    }
    
    varLenght = resultTimes.length;
    for (w = 0; w < varLenght; w++) {      
    document.getElementById("resultsTable").rows[w+1].cells.namedItem("projectedResult").innerHTML = resultTimes[w];
    }
    
    
  }


