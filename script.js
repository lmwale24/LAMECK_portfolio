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


function toggleMoreText(id) {
    var moreText = document.getElementById("more-text-" + id);
    var btnText = document.querySelector("#text-content-" + id + " .read");

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        btnText.textContent = "Read Less";
    } else {
        moreText.classList.add("hidden");
        btnText.textContent = "Read More";
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