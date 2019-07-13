let fact = document.querySelector('#fact'),
    factText = document.querySelector('#factText'),
    numberInput = document.querySelector('#numberInput');

//GET Ajax method
/*
//numberInput.addEventListener('input', getFactAjax);

function getFactAjax() {
    let number = numberInput.value,
        xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://numbersapi.com/' + number);

    xhr.onload = function () {
        if(this.status == 200 && number != ''){
            //remove default display of 'none'
            fact.style.display = 'block';
            factText.innerText = this.responseText;
        }
    }

    xhr.send();
}
*/

numberInput.addEventListener('input', getFactFetch);

//Fetch API, does same as Get method above execpt using fetch
function getFactFetch() {
    let number = numberInput.value;
    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        //The above gives us a response in data format
        .then(data => {
            if (number != '') {
                fact.style.display = 'block';
                factText.innerText = data;
            }
        })
        //Catch errors
        .catch(err => console.log(err)
        )
    ;

}