var cardnum326 = -1;
var cardimgurl537 = 'http://college1.com/images/cards/gbCard';
var imgurl204 = "/assets/img/products/";

var adnum474 = 1;
var winobj405 = -1;

var product1 = { name: "Supreme T Shirt", id: "3", desc: "Very drippy" };
var product2 = { name: "Cuban Link Chain", id: "1", desc: "Ice for your neck" };
var product3 = { name: "Nike Fanny Pack", id: "2", desc: "To store all your money" };
var product4 = {};
var product5 = {};
var jsonobj5 = { "type": "clothes", "number": "1" };
var jsonobj4 = { "type": "clothes", "number": "2" };

var companyname5 = "Drip Clothes Inc.";
var address3 = "450 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 515-1234";

function hitCard771() {
    let cardnumber0 = Math.floor(Math.random() * (51 - 0 + 1) + 0);
    if (cardnum326 != -1) {
        document.getElementById("card0").src = cardimgurl537 + cardnumber0 + '.gif';
    } else {
        alert('Cards not on screen');
    }
}

function dealCards870() {
    let cardnumber0 = Math.floor(Math.random() * (51 - 0 + 1) + 0);
    let cardnumber1 = Math.floor(Math.random() * (51 - 0 + 1) + 0);
    let cardnumber2 = 52;
    let cardnumber3 = 52;
    let cardnumber4 = 52;
    document.getElementById("main926").innerHTML = '<img id="card0" src="' + cardimgurl537 + cardnumber0 + '.gif">\
  <img id="card1" src="' + cardimgurl537 + cardnumber1 + '.gif">\
  <img id="card2" src="' + cardimgurl537 + cardnumber2 + '.gif">\
  <img id="card3" src="' + cardimgurl537 + cardnumber3 + '.gif">\
  <img id="card4" src="' + cardimgurl537 + cardnumber4 + '.gif">\
  ';
    cardnum326 = 2;
}

function getHeader() {
    return '<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">\
    <div class="container">\
        <a class="navbar-brand" href="#page-top">' + companyname5 + '</a> \
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">\
            Menu\
            <i class="fas fa-bars ms-1"></i>\
        </button>\
        <div class="collapse navbar-collapse" id="navbarResponsive">\
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">\
                <li class="nav-item"><a class="nav-link" href="#top">Home</a></li>\
                <li class="nav-item"><a class="nav-link" href="#product">Menu</a></li>\
                <li class="nav-item"><a class="nav-link" href="#contact">Main</a></li>\
            </ul>\
        </div>\
    </div>\
</nav>'
}

function getFooter(companyName, address, phoneNumber) {
    return '<footer class="footer py-4">\
    <div class="container">\
        <div class="row align-items-center">\
            <div class="col-lg-4 text-lg-start">'+ companyName + '<br>' + address + '<br>' + phoneNumber + '</div>\
            <div class="col-lg-4 my-3 my-lg-0">\
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>\
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>\
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>\
            </div>\
            <div class="col-lg-4 text-lg-end">\
                <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>\
                <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>\
            </div>\
        </div>\
    </div>\
</footer>'
}


function makeMenu7() {
    let menuString = "My Menu:<br><br>";
    for (let i = 1; i < 4; i++) {
        menuString += "<button onclick='execButton841(product" + i + ")'>Product #" + i + "</button>";
    }
    menuString += "<button onclick='getElementById(\"main926\").innerHTML=makeMain5(product4);'>Product #4</button>";
    menuString += "<button onclick='getElementById(\"main926\").innerHTML=makeMain5(product5);'>Product #5</button>";
    menuString += "<button onclick='dealCards870()'>Deal Cards</button>";
    menuString += "<button onclick='hitCard771()'>Hit Card</button>";
    menuString += "<button onclick='popupAd788()'>Pop Up Ad</button>";
    menuString += "<button onclick='closeAd788()'>Close Ad</button>";
    menuString += "<button onclick='makeForm287()'>Enter Data</button>";
    menuString = menuString.trim()
    return menuString;
}

function makeMain5(myproduct) {
    let mainString = "";
    mainString += "My Product:<br>";
    mainString += "Product Name: " + myproduct.name + "<br>";
    mainString += "Product ID: " + myproduct.id + "<br>";
    mainString += "Product Description: " + myproduct.desc + "<br>";
    mainString += "Shopping Cart Link Bar:<br>" + makeLinkBar853() + "<br>";
    const produrl = imgurl204 + "product" + myproduct.id + '.jpg';
    mainString += "Product Image: <br>" + "<img class='img-fluid' src='" + produrl + "'>";
    return mainString;
}

function execButton841(myproduct) {
    document.getElementById("main926").innerHTML = makeMain5(myproduct);
    cardnum326 = -1;
}

function makeLinkBar853() {
    return '<button type="button" class="btn btn-success">\
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill"\
        viewBox="0 0 16 16">\
        <path\
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z">\
        </path>\
    </svg>\
    Add to cart\
</button>'
}

function popupAd788() {
    adnum474 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    winobj405 = window.open("", "_blank", "width=200, height=100");

    if (adnum474 == 1) {
        winobj405.document.write('<div style="background-color: green;">\
        <h1>Im not asking anymore....Buy something! Or else....</h1>\
        </div>');
    } else if (adnum474 == 2) {
        winobj405.document.write('<div style="background-color: yellow;">\
        <h1>Please buy something?</h1>\
        </div>');
    } else if (adnum474 == 3) {
        winobj405.document.write('<div style="background-color: red;">\
        <h1>This is a great deal! Buy it NOW!!!</h1>\
        </div>');
    }
    winobj405.document.close();
    winobj405.focus();
}

function closeAd788() {
    winobj405.close();
}

function makeForm287() {
    document.getElementById("main926").innerHTML = '<form onSubmit="return checkForm790()" name="customerform">\
    <table width="100%" border="1">\
        <tr>\
            <td>First Name: <input type="text" name="firstname"></td>\
            <td align="right"> Last Name: <input type="text" name="lastname"></td>\
        </tr>\
        <tr>\
            <td colspan="2">Address: <input type="text" name="address" size="50"></td>\
        </tr>\
        <tr>\
            <td>City: <input type="text" name="city"></td>\
            <td align="right">State: <input type="text" name="state" size="3">\
                Zip: <input type="text" name="zip" size="6"></td>\
        <tr>\
            <td colspan="2">Email Address: <input type="text" name="emailaddr" size="50">\
            </td>\
        </tr>\
        <tr>\
            <td><input type="submit" value="Submit"></td>\
            <td align="right"><input type="reset"></td>\
        </tr>\
    </table>\
</form>';
}

function checkForm790() {
    let form = document.customerform;
    if (form.firstname.value == "" || form.lastname.value == "" || form.address.value == "" || form.city.value == "" || form.state.value == "" || form.zip.value == "" || form.emailaddr.value == "") {
        alert("Form is empty or some fields are missing");
        return false;
    }
}


function getProduct991(jsonobj) {
    var server = 'http://college1.com/getproduct.php';
    var jsonstr = JSON.stringify(jsonobj);           // This is a string in JSON format
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", server + "?jsonstr=" + jsonstr, true); // open connection to server
    xmlhttp.send();  // send request, causes onreadystatechange to run when reply is ready 

    xmlhttp.onreadystatechange = function () {
        //console.log('hello ' + this.readyState + ' ' + this.status);
        if (this.readyState == 4 && this.status == 200) {
            replystr = this.responseText;           // replystr MUST BE GLOBAL
            //console.log(replystr);
            if (product4 == null)
                product4 = JSON.parse(replystr);
            else if (product5 == null)
                product5 = JSON.parse(replystr);
            else
                console.log('Error, no object variable available');
        }
    };
}