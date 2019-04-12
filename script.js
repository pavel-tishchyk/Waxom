const nextSlide = document.querySelector('.arrow-right');
const prevSlide = document.querySelector('.arrow-left');
const currentSlide = document.querySelectorAll('.slider-button');
const slides = document.querySelectorAll('.slide');
var current = 0;
    
for (var i = 0; i < currentSlide.length; i++) {
    currentSlide[i].addEventListener('click', showSlide);
}

function showSlide() {
    current = this.value;
    currentTypeButton(current);
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].className = 'slide';
    }
    slides[current].className = 'slide slide-active';
}

function currentTypeButton() {
    for(var i = 0; i < currentSlide.length; i++) {
        currentSlide[i].className = 'slider-button';
    }
    currentSlide[current].className = 'slider-button slider-button-active';
}
    
nextSlide.addEventListener('click', () =>{
    current++;
    current = current > slides.length - 1 ? 0 : current; 
    if (current > slides.length - 1 || current === 0) {
        currentTypeButton(0);
        slides[0].className = "slide slide-active";
        slides[slides.length - 1].className = "slide";
    } else {
        slides[current - 1].className = "slide";
        slides[current].className = "slide slide-active";
        currentTypeButton(current);
    }
})

prevSlide.addEventListener('click', () =>{
    current--;        
    current = current < 0 ? slides.length - 1 : current; 
    if (current < 0 || current === slides.length - 1) {
        currentTypeButton(slides.length - 1);
        slides[slides.length - 1].className = 'slide slide-active';
        slides[0].className = 'slide';
    } else {
        slides[current + 1].className = 'slide'
        slides[current].className = 'slide slide-active'
        currentTypeButton(current);
    }
})

const projectTypeButton = document.querySelectorAll('.project-type-button');

for (var i = 0; i < projectTypeButton.length; i++) {
    projectTypeButton[i].addEventListener('click', currentTypeProjectButton)
}
    
function currentTypeProjectButton() {
    for (var i = 0; i < projectTypeButton.length; i++) {
        projectTypeButton[i].className = 'project-type-button';
    } 
    projectTypeButton[this.value].className = 'project-type-button type-button-active';
}

