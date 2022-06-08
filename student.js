// declare this variable outside of your functions
special = 1;     // selects which item that is "on special"

function displayspecial830() {

    if (special == 1) {
        alert("The current special is #1");
    }
    if (special == 2) {
        alert("The current special is #2");
    }
    if (special == 3) {
        alert("The current special is #3");
    }
    special = special + 1;
    if (special > 3) {
        special = 1;  // wrap around
    }

}


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