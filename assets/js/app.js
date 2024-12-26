
// navbar color change on scroll

let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if(window.scrollY > 0) {
        navbar.classList.add('active');
    }else {
        navbar.classList.remove('active');
    }
})


// mobile menu

let navLink = document.querySelector('.nav-links');
let menuIcon = document.querySelector('.icon-menu');

menuIcon.addEventListener('click', function() {
    navLink.classList.toggle('active')
    if(menuIcon.classList.contains('icon-menu')) {
        menuIcon.classList.replace('icon-menu', 'icon-cross')
    } else {
        menuIcon.classList.replace('icon-cross', 'icon-menu')
    }
})

// slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    navigation: {
        nextEl: ".icon-arrow-down2",
        prevEl: ".icon-arrow-up2",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });