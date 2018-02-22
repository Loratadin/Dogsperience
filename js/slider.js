var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}
//  test slider
var i=0; // start point
var images=[];
var time=3000;
//image list
images[0]='./images/slider1.jpg';
images[1]='./images/slider2.jpg';
images[2]='./images/slider3.jpg';
//change image
function changeImg(){
    document.slide.src=images[i];
    if(i < images.length - 1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;
//  /test slider

// my own slider
let sliderImages = document.querySelectorAll ('.slide'),
arrowLeft = querySelector ('#arrow-left'),
arrowRight = querySelector ('#arrow-right'),
current = 0;
// clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }
  // Init slider
  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }
  // Show prev
  function slideLeft(){
      reset();
      sliderImages [current - 1].style.display = "block";
      current--;
  }
  // Show next
  function slideRight(){
      reset();
      sliderImages [current +1].style.display = "block";
      current++;
  }
  //Left arrow click
  arrowLeft.addEventListener('click', function (){
      if(current === 0){
          current =sliderImages.length;
      }
      slideLeft();
  });
   //Right arrow click
   arrowRight.addEventListener('click', function (){
    if(current === sliderImages.length -1){
        current = -1;
    }
    slideRight();
});
  

startSlide();
//  /my own slider

