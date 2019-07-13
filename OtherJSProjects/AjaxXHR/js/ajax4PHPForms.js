document.getElementById('button').addEventListener('click', getName);
document.getElementById('getForm').addEventListener('submit', getName);
document.getElementById('postForm').addEventListener('submit', postName);

function getName(e) {
    e.preventDefault();

    let name = document.getElementById('name1').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'process.php?name=' + name, true);

    xhr.onload = function () {
        console.log(this.responseText);

    }

    xhr.send();
}

function postName(e) {
    e.preventDefault();

    let name = document.getElementById('name2').value;
    let params = "name=" + name;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'process.php', true);
    //we need to set the request header since we are using post and not get
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        console.log(this.responseText);
    }

    xhr.send(params);
}