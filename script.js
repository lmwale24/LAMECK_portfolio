
// show menu 
  function showMenu() {
        const menu = document.querySelector('.MainMenu');
      
            menu.style.display = 'flex';
              }
    
// hide menu
    function hideMenu() {
        const menu = document.querySelector('.MainMenu');
       
            menu.style.display = 'none';
};


        

// Grab all the <a> elements within the .MainMenu class

const menuLinks = document.querySelectorAll('.MainMenu li a');

//add event listener to each <a> element
menuLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        hideMenu();//call hidemenu func when <a> element is clicked
    });
});




// hide text functionality

  function toggleMoreText(projectId) {
        const moreText = document.getElementById(`more-text-${projectId}`);
        const button = document.querySelector(`.read[onclick='toggleMoreText(${projectId})']`);

        if (moreText.classList.contains('hidden')) {
            moreText.classList.remove('hidden');
            button.innerText = 'Read Less';
        } else {
            moreText.classList.add('hidden');
            button.innerText = 'Read More';
        }
    }
    












                                