document.addEventListener('DOMContentLoaded', function () {
    const openMenu = document.querySelector('.openMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const menuLinks = document.querySelectorAll('.MainMenu li a');
    const menu = document.querySelector('.MainMenu');

    openMenu.addEventListener('click', function () {
        menu.style.display = 'flex';
    });

    closeMenu.addEventListener('click', function () {
        menu.style.display = 'none';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.style.display = 'none';
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


// NEW More text btn
function toggleMoreTextNew() {
    var moreTextNew = document.getElementById("more-textNew");
    var readBtnNew = document.querySelector(".read");

    if (moreTextNew.textContent.length <= 250) {
        readBtnNew.textContent = "Read More";
    } else {
        if (readBtnNew.textContent === "Read More") {
            moreTextNew.style.whiteSpace = "normal"; 
            readBtnNew.textContent = "Read Less";
        } else {
            moreTextNew.style.whiteSpace = "nowrap"; 
            readBtnNew.textContent = "Read More";
        }
    }
}




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