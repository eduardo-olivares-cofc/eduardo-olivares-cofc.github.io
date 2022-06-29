var product1 = { name: "Supreme T Shirt", id: "111", desc: "Very drippy" };
var product2 = { name: "Cuban Link Chain", id: "222", desc: "Ice for your neck" };
var product3 = { name: "Nike Fanny Pack", id: "333", desc: "To store all your money" };

var companyname5 = "Drip Clothes Inc.";
var address3 = "450 Main St. Valencia, CA 91344";
var phonenumber5 = "(555) 515-1234";

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
    let menuString = "My Menu: ";
    for (let i = 0; i < 3; i++) {
        menuString += "Button ";
    }
    menuString = menuString.trim()
    return menuString;
}

function makeMain5() {
    let mainString = "";
    mainString += "My Product:<br>";
    mainString += "Product Name:<br>";
    mainString += "Product ID:<br>";
    mainString += "Product Description:<br>";
    mainString += "Shopping Cart Link Bar:<br>";
    mainString += "Product Image:<br>";
    return mainString;
}