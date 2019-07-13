let countdown = function (end, elements, callback) {
    //We comma seperate rather than write "let" "let" "let" for every variable
    var _seconds = 1000,
        _minutes = _seconds * 60,
        _hours = _minutes * 60,
        _days = _hours * 24,

        end = new Date(end),
        timer,

        calculate = function () {
            //console.log(end);

            var now = new Date(),
                remaining = end.getTime() - now.getTime(),
                data;

            //Check for valid dates via is Not a Number
            if (isNaN(end)) {
                console.log('Invalid date/time');
                return;
            }

            if (remaining <= 0) {
                //clear our timer if it gets to 0
                clearInterval(timer);
                //callback check to see if it is a function
                if (typeof callback === 'function') {
                    callback();
                }

            } else {
                if (!timer) {
                    timer = setInterval(calculate, _seconds);
                }

                data = {
                    'days': Math.floor(remaining / _days),
                    'hours': Math.floor((remaining % _days) / _hours),
                    'minutes': Math.floor((remaining % _hours) / _minutes),
                    'seconds': Math.floor((remaining % _minutes) / _seconds)
                }

                //console.log(data);
                if (elements.length) {
//Loop through elements and set their values
                    for (x in elements) {
                        var x = elements[x];
                        data[x] = ('00' + data[x]).slice(-2);
                        document.getElementById(x).innerHTML = data[x];
                    }
                }

            }

        };

    calculate();
}
