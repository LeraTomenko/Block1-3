const windowWidth = document.documentElement.clientWidth
const swiper = new Swiper('.swiper',{

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
      spaceBetween: 40
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

let checkSlider = () =>{
 if (windowWidth>=768){
  swiper.destroy()
 }
  
}
window.addEventListener('resize', checkSlider())

let test = window.addEventListener('resize', checkSlider())

console.log(windowWidth)
console.log(document.body.clientWidth)
console.log(test)






// const slider = document.querySelector('#slider');
// let { clientWidth } = document.body;
// let yourSlider;

// const sliderInit = () => {
//     yourSlider = new Swiper('.swiper',{

// breakpoints: {
//     320: {
//       slidesPerView: 1.1,     
//       spaceBetween: 16
//     },
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 30
//     },
//     640: {
//       slidesPerView: 2.7,
//       spaceBetween: 40
//     },
//     768: {
   
//     }
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true,
//     dynamicMainBullets: 12,
//     clickable: true,
//   },
// }); 
// }

// const resizeHandlerSlider = () => {
//     if (clientWidth !== document.body.clientWidth) {
//         clientWidth = document.body.clientWidth;

//         if (yourSlider) {
//             yourSlider.destroy();
//         }

//         sliderInit();
//     }
// }
// window.addEventListener('resize', resizeHandlerSlider);
//  console.log(document.body)





