const loadingDiv = document.querySelector('.loading');

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
      const isInternalLink = link.getAttribute('href').startsWith('#'); 

      if (!isInternalLink) { 
        event.preventDefault(); 
        loadingDiv.style.display = 'block'; 

        setTimeout(() => {
          loadingDiv.style.display = 'none';
          window.location.href = link.href; 
        }, 1000); 
      } else {
        event.preventDefault(); 
        const targetId = link.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 
        window.scrollTo({ 
          top: targetElement.offsetTop, 
          behavior: 'smooth' 
        });
      }
    });
  });