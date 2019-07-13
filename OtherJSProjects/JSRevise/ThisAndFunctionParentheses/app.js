class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        //When we use "this" we target anything that lives in the class "NameGenerator"
        //A BIG exception however is when it is a object that calls our code, the calling object takes the "this" priority over the object "this" resides in
        //It's explained better here https://youtu.be/Pv9flm-80vM?t=851
        this.names = ['Max', 'Manu', 'Anna'];
        this.currentName = 0;
        btn.addEventListener('click', () => {
            this.addName();
        });
        // Alternative:
        // btn.addEventListener('click', this.addName.bind(this));
        /*
        This bind function is powerful & overrides the default way "this" behaves
        "The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called."
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        */

        //Use parentheses to automatically run a function, eg addName(doStuff)
        //Do not use them if you are wanting the user to do something first like click a button so addName.doStuff
    }
    
    addName() {
        console.log(this);
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator();