function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

const text = ("lorem ipsum er en stor satan")
document.getElementById("demo").innerHTML = text;

var x = 1;
var y = 2;
var z = x + y;
document.getElementById("text").innerHTML = "Antal butikker " + z;

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Butik Åben";
} else {
  greeting = "Butik Lukket";
}

document.getElementById("butik").innerHTML = greeting;
