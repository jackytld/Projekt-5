function validation(){
    var nameV = document.getElementById('navn').value;
    alert(nameV);

    var mailV = document.getElementById('email').value;
    alert(mailV);

    var phoneV = document.getElementById('number').value;
    alert(phoneV);

    var emneV = document.getElementById('subject').value;
    alert(emneV);

    var messageV = document.getElementById('message').value;
    alert(messageV);

    var errormsgV = document.getElementById('error_message');
    var msgV;

    if(nameV.length <5 ){
        msgV = "Ohoj";
        errormsgV.innerHTML = 'msgV';
        return false;
    }


}