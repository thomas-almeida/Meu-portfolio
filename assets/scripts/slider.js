
// 1° POST
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
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// 2° POST
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var b;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slide2Index = slides2.length }
    for (b = 0; b < slides2.length; b++) {
        slides2[b].style.display = "none";
    }
    for (b = 0; b < dots2.length; b++) {
        dots2[b].className = dots2[b].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}

// 3° POST
var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var c;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot");
    if (n > slides3.length) { slideIndex3 = 1 }
    if (n < 1) { slide3Index = slides3.length }
    for (c = 0; c < slides3.length; c++) {
        slides3[c].style.display = "none";
    }
    for (c = 0; c < dots3.length; c++) {
        dots3[c].className = dots3[c].className.replace(" active", "");
    }
    slides3[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].className += " active";
}

