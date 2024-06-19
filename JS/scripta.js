// JavaScript Document
let currentSlide = 0;  
const slides = document.querySelectorAll('.carousel-slide');  
const totalSlides = slides.length;  
  
function nextSlide() {  
  slides.forEach((slide, index) => {  
    slide.style.transform = `translateX(${-100 * index}%)`;  
  });  
  
  currentSlide = (currentSlide + 1) % totalSlides;  
}  
  
// 假设我们每3秒切换一次幻灯片  
setInterval(nextSlide, 3000);  
  
// 初始设置  
nextSlide(); // 调用一次以设置初始状态