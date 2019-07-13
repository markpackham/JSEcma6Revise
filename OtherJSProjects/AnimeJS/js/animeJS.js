let playPause = anime({
    //Target all boxes not just red
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500},
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    //Turns black aftering falling down
    //backgroundColor: '#000',
    opacity: '0.4',
    delay: function (element, i, totalTargets) {
        return i * 1000;
    },
    autoplay: false,
    //without the loop you won't be able to play it again
    loop: true
});

//We get play and pause functions from Anime.js
document.querySelector('#boxes .play').onclick = playPause.play;

document.querySelector('#boxes .pause').onclick = playPause.pause;


//Inefficient duplication way of doing things for each colour
/*
anime({
    targets: 'div.box.red',
    translateY: [
        //run downwards 200px then go back up
        {value: 200, duration: 500},
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    }
});

anime({
    targets: 'div.box.blue',
    translateY: [
        //run downwards 200px then go back up
        {value: 200, duration: 500, delay: 1000},
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 1000
    }
});

anime({
    targets: 'div.box.green',
    translateY: [
        //run downwards 200px then go back up
        {value: 200, duration: 500, delay: 2000},
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 2000
    }
});

anime({
    targets: 'div.box.yellow',
    translateY: [
        //run downwards 200px then go back up
        {value: 200, duration: 500, delay: 3000},
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 3000
    }
});
*/