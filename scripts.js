const menu = document.getElementById("Lmenu");

// --- Splash Screen Animation ---

document.addEventListener("DOMContentLoaded", function() {
    // Select the splash screen
    const splashScreen = document.getElementById("splash-screen");
    
    // After a delay, hide the splash screen
    setTimeout(function() {
        splashScreen.classList.add("splash-screen-hidden");
        setTimeout(function() {
            splashScreen.style.display = "none";
        }, 1500); // Slide-out duration matches animation duration
    }, 7000); // Adjust the delay as needed
});

new TypeIt("#typed-text", { 
    speed: 50,
    startDelay: 900,
}).type("Welcome, enjoy your stay.", {delay: 50}).go()

// --- Scrolling over left menu and getting the right menu updated ---
Array.from(document.getElementsByClassName("Lmenu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });

// Adding even listener for Loaded Content
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".Lmenu-item");
    const contentDivs = document.querySelectorAll(".Rmenu-item");

    // Function to show corresponding div on hover
    function showContent(index) {
        // Looping through each div checking if it equals the one we hover if so we show it
        contentDivs.forEach((div, i) => {
            if (i === index) {
                div.style.height = div.scrollHeight + 'px';
                div.style.opacity = '1';
                div.classList.add('visible');
            } else {
                div.style.height = '0';
                div.style.opacity = '0';
                div.classList.remove('visible');
            }
        });
    }

    // Initially show "Five"
    showContent(0);

    // Event listeners for each menu item
    menuItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            showContent(index);
        });
    });
});

// --- Changing text above left menu ---
const sayings = [
    "placeholder",
    "I'm Jarod Primeau",
    "Software Developer & Full Time Student"
]

// Setting custom maessage based off of time
/*
5 AM -> 12 PM: Morning
12 PM -> 6 PM: Afternoon
6 PM -> 5 AM: Evening
*/
const currentHour = new Date().getHours();
const greeting =
    currentHour >= 5 && currentHour < 12 ? "Good Morning"
    : currentHour >= 12 && currentHour < 18 ? "Good Afternoon"
    : 'Good Evening';
sayings[0] = greeting;

// Starting at 0 index and getting our changing text div
let sayingsIndex = 0;
const changingText = document.querySelector(".changing-text");

// Base function sets the text content 
function changeWord(){
    changingText.textContent = sayings[sayingsIndex];
    sayingsIndex = (sayingsIndex + 1) % sayings.length;
    showContent();
}

// Animation to show the text content
function showContent(){
    changingText.style.transform = 'translateY(-100%)';
    changingText.style.opacity = '1';
    changingText.classList.add('visible');

    setTimeout(() => {
        changingText.style.transform = 'translateY(0)';
        changingText.style.opacity = '0';
        changingText.classList.remove('visible');
    }, 4500);
}

setTimeout(() => { // Timeout to wait for intto to play
    changeWord();
    setInterval(changeWord, 5000);
}, 7000);
