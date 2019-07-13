//Initial Ratings
let ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1
}
//Total Stars
const starsTotal = 5;

//Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

//Form Elements
let productSelect = document.getElementById('product-select');
let ratingControl = document.getElementById('rating-control');

//Init product selected
let product;

//Product select change
productSelect.addEventListener('change', (e) => {
    //Get value of what was selected
    product = e.target.value;
    //Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

//Rating control change
//blur is when you escape input

ratingControl.addEventListener('blur', (e) => {
    let rating = e.target.value;

    over5(rating);

    //Change rating
    ratings[product] = rating;
    getRatings();
});

//Allow users to click Enter in the form to change things
ratingControl.addEventListener('change', (e) => {
    let rating = e.target.value;

    over5(rating);

    //Change rating
    ratings[product] = rating;
    getRatings();
});

function over5(rating) {
    //Make sure 5 or under given we only have 5 stars
    if (rating > 5) {

        return alert('Please rate 1-5');
    }
}

//Get ratings
function getRatings() {
    for (let rating in ratings) {
        //Get percentage
        let starPercentage = (ratings[rating] / starsTotal) * 100;

        //Round to the nearest 10
        //So we get results like 90%, 70%, 50%
        let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        console.log(starPercentageRounded);
        //Set width of stars-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        //Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}