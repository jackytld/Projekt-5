// Mateusz Kode
function showDropdown() {
    console.log("showing my dropdown")
    document.getElementById("myDropdown").classList.toggle("show");
}

function hideDropdown(event) {
    console.log("i have clicked on element with class name: " +
        event.target.className)
    if (event.target.className != 'dropbtn') {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        console.log("there are " +
            dropdowns.length + " dropdowns")

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                console.log("hiding dropdown")
            }
        }
    }
}

window.onclick = function(event) {
    hideDropdown(event)
}

const hour = new Date().getHours();
let greeting;

if (hour < 17) {
    greeting = "Vi glæder os til at se jer - vi holder åben";
} else {
    greeting = "Butikker er desværre lukket - Vi åbner igen imorgen";
}
document.getElementById("lillehilsen").innerHTML = greeting;