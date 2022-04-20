function validation(){
    var navn = document.getElementbyId("navn").value;

if(navn.length <5){
    alert("Name must be filled out");
    return false;
}