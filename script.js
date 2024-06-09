
// show menu 
  function showMenu() {
        const menu = document.querySelector('.MainMenu');
      
            menu.style.display = 'flex';
              }
    
// hide menu
    function hideMenu() {
        const menu = document.querySelector('.MainMenu');
       
            menu.style.display = 'none';
        }

        



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
    












                                