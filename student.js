var custtype = "direct";

function changetype908() {
    if (custtype == "direct") {
        custtype = "advertising";
    } else if (custtype == "advertising") {
        custtype = "subscription";
    } else if (custtype == "subscription") {
        custtype = "direct";
    }

    window.alert("Customer type has changed to " + custtype);
}

function displaytype702() {
    var msg1 = "Buy Now! From this web page! My children need new shoes!";
    var msg2 = "Support our advertisers! Click on an ad, so I can make money!";
    var msg3 = "Renew your subscription today! My children need medicine!";

    if (custtype == "direct") {
        alert(msg1);
    } else if (custtype == "advertising") {
        alert(msg2);
    } else if (custtype == "subscription") {
        alert(msg3);
    }
}

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