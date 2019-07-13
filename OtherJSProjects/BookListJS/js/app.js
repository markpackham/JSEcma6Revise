// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {

        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));

    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `;

        list.appendChild(row);
    }

    //target specific book element
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            //delete the parent element of the row <td> which is <tr>
            el.parentElement.parentElement.remove();
        }
    }


    // Show alert message
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        //Vanish in 5 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 5000);

    }

//clear fields after submitting one
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}

// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        //if there are no books
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            //we need a JSON parse or it'll just be a string, we want an array
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        //convert it into a string
        localStorage.setItem('books', JSON.stringify(books));
    }

    //ISBN acts like a primary key in a database
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        //Reset local storage with book removed
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: Display Books (call the UI)
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
        //Prevent default behavior so it doesn't just vanish on submission on console.log()
        e.preventDefault();

        // Get form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        // Validate
        if (title === '' || author === '' || isbn === '') {
            //alert('Please fill in all of the field');
            UI.showAlert('Please fill in all of the field', 'danger');
        } else {
            // Init book
            const book = new Book(title, author, isbn);
            console.log(book);

            // Add Book to UI
            UI.addBookToList(book);

            //Add book to store
            Store.addBook(book);

            //Show success message
            UI.showAlert('Book Added', 'success');

            // Clear fields once you hit submit
            UI.clearFields();
        }


    }
);


// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {

    //Remove book from UI (not local storage)
    //console.log(e.target);
    UI.deleteBook(e.target);

    //Remove book from local storage by targeting the isbn
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //Show success message
    UI.showAlert('Book Removed', 'success');
});