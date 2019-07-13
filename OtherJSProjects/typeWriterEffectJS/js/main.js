/*
const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    //using an array so start at 0
    this.wordIndex = 0;
    //base 10
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type method
TypeWriter.prototype.type = function () {
    //every 0.5 seconds output hello
    //console.log('Hello');

    //Current index of word
    const current = this.wordIndex % this.words.length;
    //console.log(current);
    //Get full text of current word
    const fullTxt = this.words[current];
    //Show words in array based on index eg Developer
    //console.log(fullTxt);

    //Check if deleting
    if (this.isDeleting) {
        //Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        //Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    //If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        //Make pause at end
        typeSpeed = this.wait;
        //Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //Move to next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
}
*/

//ES6 Class way of doing things
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        //using an array so start at 0
        this.wordIndex = 0;
        //base 10
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    //Do this instead of using prototype
    type() {
        //every 0.5 seconds output hello
        //console.log('Hello');

        //Current index of word
        const current = this.wordIndex % this.words.length;
        //console.log(current);
        //Get full text of current word
        const fullTxt = this.words[current];
        //Show words in array based on index eg Developer
        //console.log(fullTxt);

        //Check if deleting
        if (this.isDeleting) {
            //Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //Initial type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        //If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            //Make pause at end
            typeSpeed = this.wait;
            //Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            //Move to next word
            this.wordIndex++;
            //Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    //grab from         <span class="txt-type" data-wait="3000" data-words='["Developer", "Designer", "Creator"]'></span>
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}