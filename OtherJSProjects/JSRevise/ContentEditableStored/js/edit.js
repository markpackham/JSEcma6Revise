let edit = document.getElementById('edit');

if (localStorage.getItem('edit') == null) {
    edit.innerHTML = 'Please write some text since contenteditable="true"';
}
else {
    //You must user innerHTML and not innerText or you end up with html stuff showing up eg "<div>some text<div>"
    edit.innerHTML = localStorage.getItem('edit');
}

edit.addEventListener('blur', function () {
        //grab what's in edit and store it
        localStorage.setItem('edit', this.innerHTML);
    }
);