
/* notice the *, this means it is a generator function where you can use yields */
function* sampleGenerator() {
    yield 'apples';
    /* the "yield" command pauses things and you need a "next" to move on*/
    yield 'bacon';
    yield 'frogs';
    console.log('this is the line after frogs');
    yield 'corn';
}

let sample = sampleGenerator();
console.log(sample.next());
console.log(sample.next().value);
console.log(sample.next().value);

function* getNextId() {
    let id = 0;
    while (id < 3) {
        yield id++;
    }
}

let createUser = getNextId();
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log(createUser.next().value);
/*If I run anothor createUser.next I'll get an undefined */