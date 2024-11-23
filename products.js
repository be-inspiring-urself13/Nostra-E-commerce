//product search functionality
var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div.products");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productname = productList[count].querySelector("h2");
        if (productname.textContent.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});

//sidenavigationbar
document.getElementById('side-navbar-activate').addEventListener('click', function () {
    document.getElementById('side-nav').style.width = '250px';
});

document.getElementById('side-navbar-close').addEventListener('click', function () {
    document.getElementById('side-nav').style.width = '0';
});