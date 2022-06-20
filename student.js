function getBreaks542() {
    var number = -1;
    do {
        number = parseInt(window.prompt("Enter a number from 1 to 5"));
    } while (number < 1 || number > 5);

    var breaks = "";

    for (var i = 0; i < number; i++) {
        breaks += "<br>";
    }

    document.getElementById("breaks542").innerHTML = breaks;
}

function getCards914() {
    var number = -1;
    do {
        number = parseInt(window.prompt("Enter a number from 2 to 7"));
    } while (number < 2 || number > 7);

    var cardsMessage = "";

    for (var i = 0; i < number; i++) {
        cardsMessage += "Card #" + i + " ";
    }


    cardsMessage = cardsMessage.trim()

    document.getElementById("cards914").innerHTML = cardsMessage;
}

function getAge277() {
    var age = window.prompt("Enter your age")
    var message = "Your Age Is: " + age;

    if (age < 18) {
        message += " You are a kid";
    } else if (age < 50) {
        message += " You are an adult";
    } else if (age > 50) {
        message += " You are a senior citizen";
    }

    document.getElementById("age277").textContent = message;
}

function getName404() {
    var name = window.prompt("Enter your name:");
    var message = "Your Name Is: " + name;

    if (name.length < 5) {
        message += " You have a short name";
    } else if (name.length < 10) {
        message += " You have a medium name";
    } else if (name.length > 10) {
        message += " You have a long name";
    }

    document.getElementById("name404").textContent = message;
}

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