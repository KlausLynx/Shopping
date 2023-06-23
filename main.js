const toggle = document.getElementById('btn');
const note = document.getElementById('message');
const warnIcon = document.getElementById('error');
const form = document.getElementById('form');


function validateEmail() {
    const email = document.getElementById('inputEmail').value;
    if(email.length == 0) {
        note.style.display = 'block'
        warnIcon.style.display = 'flex'
        toggle.style.bottom = '25px'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        note.style.display = 'block'
        warnIcon.style.display = 'flex'
        toggle.style.bottom = '25px'
        return false;
    }
    note.style.display = 'none'; 
    warnIcon.style.display = 'none';
    toggle.style.bottom = '0px';
    return true

}

function validateForm() {
    if(!validateEmail()) {
        setTimeout(function(){
            note.style.display = 'none'; 
            warnIcon.style.display = 'none';
            toggle.style.bottom = '0px'
        }, 2000);
        return false;
    }
}
 