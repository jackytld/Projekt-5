function validation(){
    var nameV = document.getElementById('navn').value;

    var mailV = document.getElementById('email').value;

    var phoneV = document.getElementById('number').value;

    var emneV = document.getElementById('subject').value;

    var messageV = document.getElementById('message').value;

    var errormsgV = document.getElementById('error_message');
    var msgV =["Venligst skriv navn0", "Venligst skriv email", "Venligst skriv telefonnr", "Venligst skriv emne", "Venligs udfyld besked"]

    if(nameV.length <5 ){
        msgV = [0];
        errormsgV.innerHTML = 'msgV=[0]';
        return false;
    }

    if(mailV.length <6 ){
        msgV = [1];
        errormsgV.innerHTML = 'Venligst skriv Mail';
        return false;
    }

    if(phoneV.length <6 ){
        msgV = [2];
        errormsgV.innerHTML = 'Venligst skriv telefonnr';
        return false;
    }

    if(emneV.length <3 ){
        msgV = [3];
        errormsgV.innerHTML = 'Venligst skriv Emne';
        return false;
    }

    if(messageV.length <4 ){
        msgV = [4];
        errormsgV.innerHTML = 'Venligst skriv Besked - vi har nu modtaget den.';
        return false;
    }
    else{
        alert("Tak for din besked")
    }

}