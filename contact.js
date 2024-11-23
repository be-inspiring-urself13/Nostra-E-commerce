//sidenavigationbar
document.getElementById('side-navbar-activate').addEventListener('click', function () {
    document.getElementById('side-nav').style.width = '250px';
});

document.getElementById('side-navbar-close').addEventListener('click', function () {
    document.getElementById('side-nav').style.width = '0';
});