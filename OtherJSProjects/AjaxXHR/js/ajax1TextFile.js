//event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    //Create XHR Object
    const xhr = new XMLHttpRequest();
    //Open - request type, url/file, async (true or false)
    //console.log(xhr);
    xhr.open('GET', 'sample.txt', true);

    //console.log('READYSTATE: ', xhr.readyState);

    /*Optional - used for loaders, no for simple stuff
    https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onprogress
    The XMLHttpRequestEventTarget.onprogress is the function called periodically
    with information when an XMLHttpRequest before success completely
    */
    xhr.onprogress = function () {
        //Will give back a ready state of 3
        //console.log('READYSTATE: ', xhr.readyState);
    }

    xhr.onload = function () {
        //if xhr status is ok
        if (this.status == 200) {
            document.getElementById('text').innerHTML =
                this.responseText;
        }
        elseif(this.status = 404)
        {
            document.getElementById('text').innerHTML =
                'Not found';
        }
    }

    /* old way to do this instead of using onload
    xhr.onreadystatechange = function () {
        console.log('READYSTATE: ', xhr.readyState);
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
        }
    }
    */

    xhr.onerror = function () {
        console.log('Request error');
    }


    //Send request
    xhr.send();
}