//// Scroll effects
window.addEventListener('scroll', function () {
    const avatarContainer = document.querySelector('.avatarContainer');
    const avatar = document.querySelector('.scrollContainer');
    const illBar = document.querySelector('.barIllustration');
    const toTop = document.querySelector('#toTop');
    const scrollLimit = parseFloat(getComputedStyle(document.documentElement).fontSize) * 9;
    if (window.scrollY > scrollLimit) {
        avatarContainer.style.scale = '.6';
        avatar.style.top = '-9rem';
        if (window.scrollY > scrollLimit * 3) {
            toTop.style.visibility = 'visible';
            toTop.style.scale = '1';
        }
        if (!window.matchMedia("(min-width: 800px) and (max-width: 1100px)").matches) {
            illBar.style.visibility = 'visible';
        }
        if(!window.matchMedia("max-width: 800px")) {
            illBar.style.visibility = 'hidden';
        }
    } else {
        avatarContainer.style.scale = '';
        avatar.style.top = '';
        toTop.style.scale = '0';
        setTimeout(function() {
            toTop.style.visibility = '';
        }, 200);
        illBar.style.visibility = '';
    }
});

//// Highlight part
const aboutButton = document.querySelector('h1');
const about = document.querySelector('#about');
const aboutText = document.querySelector('#aboutText');
const background = document.querySelector('#background');
const skillsButton = document.querySelector('#skillsLink');
const skillsList = document.querySelector('#skillsList');
const skillsListL = document.querySelector('#skillsListL')
const projectsButton = document.querySelector('#projectsLink');
const projectsList = document.querySelector('#projectsList');
const projectsListL = document.querySelector('#projectsListL');
skillsButton.addEventListener('click', function () {
    setTimeout(function () {
        blink(skillsList, skillsListL, 2);
    }, 800);
});
projectsButton.addEventListener('click', function() {
    setTimeout(function() {
        blink(projectsList, projectsListL, 2);
    }, 1000);
});
aboutButton.addEventListener('click', function() {
    setTimeout(function() {
        blink(about, aboutText, 2);
    }, 400);
});

function blink(object1, object2 = null, limit, counter = 0) {
    if (counter < limit) {
        object1.style.color = '#008080';
        object1.style.textShadow = '0 0 .5rem #008080';
        if (object2) {
            object2.style.color = '#008080';
            object2.style.textShadow = '0 0 .5rem #008080';
        }
        setTimeout(function () {
            object1.style = '';
            object1.style.textShadow = '';
            if (object2) {
                object2.style = '';
                object2.style.textShadow = '';
            }
        }, 150);
        setTimeout(function () {
            blink(object1, object2, limit, counter + 1);
        }, 200);
    }
};

//// Navigator change on scroll
const navTextContainer = document.querySelector('.indicatorContainer');
const navText = document.querySelector('.indicator');
const textChange = function (text) {
    navTextContainer.style.left = 'calc(50% - 7rem)';
    navText.style.opacity = '0';
    setTimeout(function() {
        navText.textContent = `${text}`;
        navText.style.opacity = '1';
        navTextContainer.style.left = 'calc(50% - 2rem)';
    }, 100)
}
var state = 1;
const navTextUpdate = function () {
    const aboutRect = about.getBoundingClientRect();
    const backgroundRect = background.getBoundingClientRect();
    const skillsRect = skillsList.getBoundingClientRect();
    const projectsRect = projectsList.getBoundingClientRect();
    if (aboutRect.top <= 20 && aboutRect.bottom >= 0 && state != 1) {
        state = 1;
        textChange("ABOUT");
    } else if (backgroundRect.top <= 20 && backgroundRect.bottom >= 0 && state != 2) {
        state = 2;
        textChange("BACKGROUND");
    } else if (skillsRect.top <= 20 && skillsRect.bottom >= 0 && state != 3) {
        state = 3;
        textChange("SKILLS");
    } else if (projectsRect.top <= 20 && projectsRect.bottom >= 0 && state != 4) {
        state = 4;
        textChange("PROJECTS");
    }
};
window.addEventListener('scroll', throttle(navTextUpdate, 20));










//// Functions
// Throttle Function
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}