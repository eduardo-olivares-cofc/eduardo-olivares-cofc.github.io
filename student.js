var name2 = 'Eduardo Olivares';
var a_message = 'cs190 Javascript Lab 2';
var code = '426';

function displayinfo537() {
    window.alert(name2 + " " + a_message + " " + code);
}

function confirmlink371(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?")) {
        location = linkname;
    }
}