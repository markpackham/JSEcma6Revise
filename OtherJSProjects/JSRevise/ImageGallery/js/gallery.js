const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

//Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img =>
    img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset opacity of all images, so only the one last clicked on gets changed
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current image to sourtce of clicked image
    current.src = e.target.src;

    //Add fade in class to selected image
    current.classList.add('fade-in');

    //Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //Change the opacity of the image to opacity variable
    e.target.style.opacity = opacity;
}