const slider = document.querySelector('.swiper');
let mySwiper;


const btnForShow = document.querySelector('.btn-for-show');
const btnForClose = document.querySelector('.btn-for-close');
const container = document.querySelector('.container-for-hiden');



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

btnForShow.addEventListener('click', () => {
  container.classList.remove('hidden',  );
});

btnForClose.addEventListener('click', () => {
  container.classList.add('hidden');
});





