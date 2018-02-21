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
//test slider
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

