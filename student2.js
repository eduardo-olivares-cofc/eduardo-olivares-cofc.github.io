var cardnum326 = -1;
var cardimgurl537 = 'http://college1.com/images/cards/gbCard';
var imgurl204 = 'http://college1.com/images/';

var product1 = { name: "Supreme T Shirt", id: "111", desc: "Very drippy" };
var product2 = { name: "Cuban Link Chain", id: "222", desc: "Ice for your neck" };
var product3 = { name: "Nike Fanny Pack", id: "333", desc: "To store all your money" };

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
    menuString += "<button onclick='dealCards870()'>Deal Cards</button>";
    menuString += "<button onclick='hitCard771()'>Hit Card</button>";
    menuString = menuString.trim()
    return menuString;
}

function makeMain5(myproduct) {
    let mainString = "";
    mainString += "My Product:<br>";
    mainString += "Product Name: " + myproduct.name + "<br>";
    mainString += "Product ID: " + myproduct.id + "<br>";
    mainString += "Product Description: " + myproduct.desc + "<br>";
    mainString += "Shopping Cart Link Bar: <br>";
    const produrl = imgurl204 + myproduct.id + '.gif';
    mainString += "Product Image: " + "<img src='" + produrl + "'>";
    return mainString;
}

function execButton841(myproduct) {
    document.getElementById("main926").innerHTML = makeMain5(myproduct);
    cardnum326 = -1;
}