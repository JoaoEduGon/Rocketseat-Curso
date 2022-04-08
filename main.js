/*mudar o herader da pagina quando der scroll*/
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        //mair que a altura do header
        header.classList.add('scroll');
    } else {
        //Menor que a altura do header
        header.classList.remove('scroll');
    }
})




/* Abre e fecha o menu ao clilcar em cima do icone: hambuerger e X*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav, toggle")

for(const element of toggle){
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}
/* Quando clicar em um item do menu escondor o menu*/

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')

    })
}


/* Testimonials carouset slider swiper*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
  })
   
    
