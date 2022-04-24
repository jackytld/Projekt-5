// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "God morgen, denne side viser lidt af de seneste opslag du kan forvente af vores Instagram katalog, tjek vores billeder eller reels ud!";
} else if (time < 20) {
  greeting = "God dag, denne side viser lidt af de seneste opslag du kan forvente af vores Instagram katalog, tjek vores billeder eller reels ud!";
} else {
  greeting = "God aften, denne side viser lidt af de seneste opslag du kan forvente af vores Instagram katalog, tjek vores billeder eller reels ud!";
}
document.getElementById("demo").innerHTML = greeting;