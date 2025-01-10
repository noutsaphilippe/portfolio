
//{}[]
//----------------handle fa-bars toggle-------------
const faBars = document.querySelector('.show-bars');
const menu = document.querySelector('.menu');

faBars.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
})

window.onscroll = () => {
    menu.classList.remove('show-menu');
}
//----------------------handle multi text-----------------------
const typed = new Typed('.multi-text', {
  strings: ['Cloud Administrator Associate', 'Front End Developer', 'Web Designer','IT Support/Helpdesk'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

//------------------------handle badges movement---------------------
const movement = {
  distance: "50px",
  origin: "top",
  duration: 2000
};

ScrollReveal().reveal('.img1',{
  ...movement,
  delay: 1000,
  origin: "top"
});
ScrollReveal().reveal('.img2',{
  ...movement,
  origin: "top"
});

