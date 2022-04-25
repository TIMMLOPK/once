let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function getDate() {

    var date = new Date();
    var date1 = date.toLocaleString();

    var div1 = document.getElementById("times");

    div1.innerHTML = date1;
}
setInterval("getDate()", 1000)



mybutton = document.getElementById("gotop");

window.onscroll = function () { scrollFunction() };


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
