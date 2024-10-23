//get slider elements
const slider =
document.querySelector('.slider');
const slides =
document.querySelectorAll('.slide');
const prevButton = 
document.querySelector('.prev');
const nextButton =
document.querySelector('.next');
const dots =
document.querySelectorAll('.slider-dots button');

//set initial slide index
let currentindex = 0

//Funtion to update slide
function updateslide() {
    //Remove active class from all slides
    slides.forEach((slide)=> slide.classList.remove('active'));
    //Add active class to current slide
    slides[currentindex].classList.add('active');
    //Update dot indicators
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentindex) {
            dot.classList.add('active');
        }
    });
}

//Navigate to next slide
nextButton.addEventListener('click',() => {
    currentindex = (currentindex + 1) % 
    slides.length;
    updateslide();
});

//Navigate to previous slide 
prevButton.addEventListener('click',() => {
    currentindex = (currentindex - 1 + slides.length) %
    slides.length;
    updateslide();
});

//Navigate to specific slide using dot indicators
dots.forEach((dot, index) => {
    dot.addEventListener('click',() => {
        currentindex = index;
        updateslide();
    });
});

//Initialize slider
updateslide();