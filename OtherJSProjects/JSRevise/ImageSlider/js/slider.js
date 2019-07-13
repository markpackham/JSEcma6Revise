let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//Clear all images
function reset() {
    for(let i =0; i < sliderImages.length; i++){
        //Hide everything
        sliderImages[i].style.display = 'none';
    }
}

//Slider initializer
function startSlide() {
    reset();
    //Grab first image and override default of display = 'none' using 'block'
    sliderImages[0].style.display = 'block';
}

//Show previous (left arrow)
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display =  'block';
    current --;
}

//Show next (right arrow)
function slideRight() {
    reset();
    sliderImages[current + 1].style.display =  'block';
    current ++;
}

//Left arrow click
arrowLeft.addEventListener('click', function () {
   if(current === 0){
       //If you are image 0 then just to the very last image
       current = sliderImages.length;
   }
   slideLeft()
});

//Right arrow click
arrowRight.addEventListener('click', function () {
    if(current === sliderImages.length - 1){
        //If you are at the last image then go back to the very first image
        current = -1;
    }
    slideRight()
});


startSlide();