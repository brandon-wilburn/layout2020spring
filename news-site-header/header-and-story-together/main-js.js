console.log("JCRIP");

var account = document.getElementById("account");
var accountList = document.getElementsByClassName("account-nav-list")[0];
var ac = 0;
account.addEventListener("click", function(){
    if (ac == 0){
        accountList.classList.add("active-list");
        storiesList.classList.remove("active-list");
        moreList.classList.remove("active-list");
        ac = 1;
    }
    else if (ac == 1) {
        accountList.classList.remove("active-list");
        ac = 0;
    }
}, true);

var stories = document.getElementById("stories");
var storiesList = document.getElementsByClassName("stories-nav-list")[0];
var sc = 0;
stories.addEventListener("click", function(){
    if (sc == 0){
        storiesList.classList.add("active-list");
        accountList.classList.remove("active-list");
        moreList.classList.remove("active-list");
        sc = 1;
    }
    else if (sc == 1) {
        storiesList.classList.remove("active-list");
        sc = 0;
    }
}, true);

var more = document.getElementById("more");
var moreList = document.getElementsByClassName("more-nav-list")[0];
var mc = 0;
more.addEventListener("click", function(){
    if (mc == 0){
        moreList.classList.add("active-list");
        storiesList.classList.remove("active-list");
        accountList.classList.remove("active-list");
        mc = 1;
    }
    else if (mc == 1) {
        moreList.classList.remove("active-list");
        mc = 0;
    }
}, true);

var navIcon = document.getElementsByClassName("nav-icon")[0];
var nav = document.getElementsByTagName("nav")[0];
navIcon.addEventListener("click", function(){
    nav.style.visibility = "visible";
    navIcon.style.opacity = "0";
    closeNavIcon.style.opacity = ".85";
    nav.style.opacity = "1";
}, true);

var closeNavIcon = document.getElementsByClassName("close-nav-icon")[0];
closeNavIcon.addEventListener("click", function(){
    moreList.classList.remove("active-list");
    storiesList.classList.remove("active-list");
    accountList.classList.remove("active-list");
    nav.style.visibility = "hidden";
    navIcon.style.opacity = ".85";
    closeNavIcon.style.opacity = "0";
    nav.style.opacity = 0;
}, true);

var desktopAcc = document.getElementById("desktop-account");
var desktopAccList = document.getElementById("desktop-account-list");
var accDeskInt = 0;
desktopAcc.addEventListener("click", function(){
    if (accDeskInt == 0 ) {
        desktopAccList.classList.add("active-list-desktop");
        accDeskInt = 1;
    }

    else if (accDeskInt == 1) {
        desktopAccList.classList.remove("active-list-desktop");
        accDeskInt = 0;
    }
}, true);

var desktopSto = document.getElementById("desktop-stories");
var desktopStoList = document.getElementById("desktop-stories-list");
var stoDeskInt = 0;
desktopSto.addEventListener("click", function(){
    if (stoDeskInt == 0 ) {
        desktopStoList.classList.add("active-list-desktop");
        stoDeskInt = 1;
    }

    else if (stoDeskInt == 1) {
        desktopStoList.classList.remove("active-list-desktop");
        stoDeskInt = 0;
    }
}, true);

var desktopMor = document.getElementById("desktop-more");
var desktopMorList = document.getElementById("desktop-more-list");
var morDeskInt = 0;
desktopMor.addEventListener("click", function(){
    if (morDeskInt == 0 ) {
        desktopMorList.classList.add("active-list-desktop");
        morDeskInt = 1;
    }

    else if (morDeskInt == 1) {
        desktopMorList.classList.remove("active-list-desktop");
        morDeskInt = 0;
    }
}, true);