const MainMenu = document.querySelector('.MainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);


function show(){
    MainMenu.style.display = 'flex';
    MainMenu.style.top = '0';
}

function close(){
    MainMenu.style.top = '100%';
}

document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.MainMenu li a');
    const menu = document.querySelector('.MainMenu');

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 800) {
                menu.style.display = 'none'; 
            }
        });
    });
});


// scroll functionality
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var image = document.querySelector('.ldn-bridgeContainer img');
    var windowHeight = window.innerHeight;
    var imageBottom = image.getBoundingClientRect().bottom;

    if (imageBottom < windowHeight) {

        var opacity = 1 - (scrollPosition / windowHeight);
        image.style.opacity = opacity;
    }
});


// SLIDESHOW FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const imageList = document.querySelector('.image-list');
    const scrollbarThumb = document.querySelector('.scrollbar-thumb');

    let scrollAmount = 0;
    let clicksToLeft = 0;
    let clicksToRight = 0;

    prevButton.addEventListener('click', function () {
        if (clicksToRight > 0) {
            clicksToRight = 0;
            nextButton.disabled = false;
        }

        if (clicksToLeft < 4) {
            scrollAmount -= 550;
            imageList.scrollLeft = scrollAmount;
            scrollbarThumb.style.left = `${(scrollAmount / (imageList.scrollWidth - imageList.clientWidth)) * 50}%`;
            clicksToLeft++;

            if (clicksToLeft === 4) {
                prevButton.disabled = true;
            }
        }
    });

    nextButton.addEventListener('click', function () {
        if (clicksToLeft > 0) {
            clicksToLeft = 0;
            prevButton.disabled = false;
        }

        if (clicksToRight < 4) {
            scrollAmount += 550;
            imageList.scrollLeft = scrollAmount;
            scrollbarThumb.style.left = `${(scrollAmount / (imageList.scrollWidth - imageList.clientWidth)) * 50}%`;
            clicksToRight++;

            if (clicksToRight === 4) {
                nextButton.disabled = true;
            }
        }
    });
});





