document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.php', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let users = JSON.parse(this.responseText);

            let output = '';

            for (let i in users) {
                output += `<ul><li>ID: ${users[i].id}
                    </li><li>Name: ${users[i].name}
                    </li></ul>`;
            }

            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}