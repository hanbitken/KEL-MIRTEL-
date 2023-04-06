var menuBar = document.getElementById('mobileMenu');
var navCon = document.getElementById('navCon');
var instant = document.getElementById('instantDP');
var burst = document.getElementById('burstDP');
var perminute = document.getElementById('perMinuteDP');
var auto = document.getElementById("autoDP");
var multiplier = document.getElementById('multiplier');
var autoM = document.getElementById("autoDPm");
var multiplierM = document.getElementById('multiplierm');
var currDP = document.getElementById('DP');
var myrtleClick = document.getElementById('myrtleClick');

menuBar.addEventListener("click", toggleBar);
function toggleBar() {
    menuBar.classList.toggle("barActive");
    navCon.classList.toggle("navToggleActive");
    navCon.classList.toggle("navMenuActive");
}

//game code


instant.addEventListener("click", instantDP);
burst.addEventListener("click", burstUpg);
perminute.addEventListener("click", dppsUpg);
auto.addEventListener("click", dpPS);
autoM.addEventListener("click", dpPS);
multiplier.addEventListener("click", multiply);
multiplierM.addEventListener("click", multiply);
myrtleClick.addEventListener("click", myrtleClicked);

function test() {
    alert("clicked!");
}

// dp update

var currentDP = 0;
setInterval(() => {
    document.getElementById('DP').innerText = currentDP;
}, 200);

// dp when clicked

var clicked = 1;
function myrtleClicked() {
    currentDP += clicked;
}

// auto dp upgrade

var autoUpTimes = 0;
function dpPS() {
    if (currentDP >= 1000) {
        currentDP -= 1000;
        autoUpTimes += 1;
        setInterval(() => {
            currentDP += autoUpTimes;
        }, 1000);
    }
}

// multiplier

function multiply() {
    if (currentDP >= 10000) {
        currentDP -= 10000;
        autoUpTimes += autoUpTimes;
        clicked += clicked;
    }
}

// instant dp upgrade

var instUpTimes = 0;
var lockInstant = 0;
function instantDP() {
    if (currentDP >= 2500 && lockInstant == 0) {
        currentDP -= 2500;
        lockInstant++;
        instUpTimes += 500;
        setInterval(() => {
            currentDP += instUpTimes;
        }, 30000);
        instant.setAttribute("style", "background-color: grey;");
    }
}

// dp burst upgrade

var cooldown = 0;
function burstUpg() {
    if (cooldown <= 0) {
        cooldown = 30;
        currentDP += 5000;
    }
}
setInterval(() => {
    if (cooldown > 0){
        cooldown--;
        document.getElementById('burstDP').innerHTML = cooldown;
    }
}, 1000);

// dpps upgrade

var lockDPPS = 0;
function dppsUpg() {
    if (currentDP >= 20000 && lockDPPS == 0) {
        currentDP -= 20000;
        lockDPPS++;
        autoUpTimes += autoUpTimes;
        perminute.setAttribute("style", "background-color: grey;");
    }
}