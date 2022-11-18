const slider = document.querySelector('.swiper');
let mySwiper;



const button = document.querySelector('.slider-btn__button');
const container = document.querySelector('.container-for-hiden');
const icon = document.querySelector('.slider-btn__icon');
const textButton = document.querySelector('.slider-btn__text');



function checkSlider(){
  if (window.innerWidth<=767 && slider.dataset.mobile == 'false' ){
    mySwiper =  new Swiper('.swiper',{

breakpoints: {
    320: {
      slidesPerView: 1.1,     
      spaceBetween: 16
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2.7,
      spaceBetween: 16
    },
    768: {
   
    }
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 12,
    clickable: true,
  },
});
   slider.dataset.mobile == 'true'
  }
  if(window.innerWidth>767){
    slider.dataset.mobile == 'false';

    if(slider.classList.contains('swiper-initialized')){
      mySwiper.destroy()
    }
    
  }
}



checkSlider()

window.addEventListener('resize',()=>{
  checkSlider()
})

button.addEventListener('click', () => {
  container.classList.toggle('hidden');
  button.classList.toggle('btn-for-close');
  icon.classList.toggle('icon-rotate');  
   textButton.textContent =
    (textButton.textContent === 'Скрыть') ? textButton.textContent = 'Показать все' : textButton.textContent = 'Скрыть';
});







