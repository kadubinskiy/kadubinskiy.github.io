//// Animate gifs on hover
// Patchwork
function playPatchworkDemo() {
    document.getElementById('patchworkImg').src = 'images/gifs/patchworkDemo.gif';
}

function pausePatchworkDemo() {
    document.getElementById('patchworkImg').src = 'images/patchworkLogo.jpg';
}

// SmartHome
function playSmartHomeDemo() {
    document.getElementById('smartHomeImg').src = 'images/gifs/smartHomeDemo.gif';
}

function pauseSmartHomeDemo() {
    document.getElementById('smartHomeImg').src = 'images/smartHomeLogo.jpg';
}

//// Navbar change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    const scrollLimit = parseFloat(getComputedStyle(document.documentElement).fontSize) * 4;
    var gradMove = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    if (window.scrollY > scrollLimit) {
        navbar.style.position = 'sticky';
        navbar.style.top = '-4rem';
        navbar.style.borderRadius = '.2rem';
        overlay.style.borderRadius = '.2rem';
        overlay.style.background = `linear-gradient(to right, yellow, yellow ${gradMove-.5}%, black ${gradMove+.5}%, black 100%)`;
        overlay.style.opacity = 1;
    } else {
        navbar.style.position = 'relative';
        navbar.style.top = '';
        navbar.style.borderRadius = '';
        overlay.style.borderRadius = '';
        overlay.style.opacity = '';
    }
});