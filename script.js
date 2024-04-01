
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.MainMenu li a');
    const menu = document.querySelector('.MainMenu');

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 800) {
                menu.style.top = '100%'; // Close the menu after a link is clicked
            }
        });
    });

    // Initially hide the menu on screens smaller than 800 pixels
    if (window.innerWidth < 800) {
        MainMenu.style.top = '100%';
    }
});
const MainMenu = document.querySelector('.MainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show() {
    MainMenu.style.top = '0';
}

function close() {
    MainMenu.style.top = '100%';
}



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

            if (clicksToLeft === 3) {
                prevButton.disabled = true;
            }
        }
    });

    nextButton.addEventListener('click', function () {
        if (clicksToLeft > 0) {
            clicksToLeft = 0;
            prevButton.disabled = false;
        }

        if (clicksToRight < 3) {
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





// More text btn
function toggleMoreText() {
    var moreText = document.getElementById("more-text");
    var readBtn = document.querySelector(".read");

    if (moreText.textContent.length <= 250) {
        readBtn.textContent = "Read More";
    } else {
        if (readBtn.textContent === "Read More") {
            moreText.style.whiteSpace = "normal"; 
            readBtn.textContent = "Read Less";
        } else {
            moreText.style.whiteSpace = "nowrap"; 
            readBtn.textContent = "Read More";
        }
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('lazy');
                observer.unobserve(image);
            }
        });
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });
});

// 
// Add event listener for scroll event
window.addEventListener('scroll', function() {
    // Get the position of the #Home section
    var homeSection = document.getElementById('Home');
    var homeSectionPosition = homeSection.getBoundingClientRect().top;
  
    // Check if the #Home section is in the viewport
    if (homeSectionPosition < window.innerHeight && homeSectionPosition >= 0) {
        // Apply transition effects to the #Home section
        homeSection.style.transition = 'height 0.5s ease-in-out, opacity 0.5s ease-in-out';
        homeSection.style.overflow = 'hidden';
    }
});
