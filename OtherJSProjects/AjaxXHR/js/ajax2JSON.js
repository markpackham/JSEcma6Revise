document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);


function loadUser() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if (this.status == 200) {

            let user = JSON.parse(this.responseText);

            let output = '';
            output += `<ul>
<li>ID: ${user.id}</li>
<li>ID: ${user.name}</li>
<li>ID: ${user.email}</li>
</ul>`;
            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function () {
        if (this.status == 200) {

            let users = JSON.parse(this.responseText);

            let output = '';

            //Since we are dealing with more than one user we need to loop through
            for (let i in users) {
                output += `<ul>
<li>ID: ${users[i].id}</li>
<li>ID: ${users[i].name}</li>
<li>ID: ${users[i].email}</li>
</ul>`;
            }
            
            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}