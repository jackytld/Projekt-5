function validation(){
    var nameV = document.getElementById('navn').value;

    var mailV = document.getElementById('email').value;

    var phoneV = document.getElementById('number').value;

    var emneV = document.getElementById('subject').value;

    var messageV = document.getElementById('message').value;

    var errormsgV = document.getElementById('error_message');
    var msgV =["Venligst skriv navn", "Venligst skriv email", "Venligst skriv telefonnr", "Venligst skriv emne", "Venligs udfyld besked"];


    if(nameV.length <5 ){
        errormsgV.innerHTML = msgV[0];
        return false;
    }

    if(mailV.length <6 ){
        errormsgV.innerHTML = msgV[1];
        return false;
    }

    if(phoneV.length <6 ){
        errormsgV.innerHTML = msgV[2];
        return false;
    }

    if(emneV.length <3 ){
        errormsgV.innerHTML = msgV[3];
        return false;
    }

    if(messageV.length <4 ){
        errormsgV.innerHTML = msgV[4];
        return false;
    }
    else{
        alert("Tak for din besked - den er nu sendt til os")
    }


}

for(let i=0; i<5; i++){
    if (i% 2 !==0) console.log('msgV')
}
