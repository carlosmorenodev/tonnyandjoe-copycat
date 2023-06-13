const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Autoplay
    autoplay: {
        delay: 5000,
      },

    //Fade effect
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
  
    // And if we need scrollbar
    /* scrollbar: {
      el: '.swiper-scrollbar',
    }, */
  });


  //Responsive Main Menu

  const mainMenu = document.getElementById('mainMenu');
  const closeResponsive = document.getElementById('closeResponsive');

  closeResponsive.addEventListener("click", () => {
    mainMenu.classList.toggle('main-menu-responsive');
  })