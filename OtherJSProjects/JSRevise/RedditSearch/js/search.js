import reddit from './redditapi';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//Form event listener
searchForm.addEventListener('submit', e => {
    //Get search term
    const searchTerm = searchInput.value;

    //Get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;

    //Get limit
    const searchLimit = document.getElementById('limit').value;

    //Check input
    if (searchTerm === '') {
        //Show Message
        showMessage('Please add a search term', 'alert-danger');
    }

    //Clear input
    searchInput.value = '';

    //Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy)
        .then(results => {
            //notice we are using "let" and not "const" since this will change
            let output = '<div class="card-columns">';
            console.log(results);
            results.forEach(post => {
                //Check for images in post if none use a default reddit image
                let image = post.preview
                    ? post.preview.images[0].source.url
                    : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
                output += `
      <div class="card mb-2">
      <img class="card-img-top" src="${image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${truncateString(post.selftext, 100)}</p>
        <a href="${post.url}" target="_blank
        " class="btn btn-primary">Read More</a>
        <hr>
        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
        <span class="badge badge-dark">Score: ${post.score}</span>
      </div>
    </div>
      `;
            });
            output += '</div>';
            document.getElementById('results').innerHTML = output;
        });

    e.preventDefault();
});

//Show message
function showMessage(message, className) {
    //Create div
    const div = document.createElement('div');
    //Add classes (used ECMA6 "`" ticks)
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const searchContainer = document.getElementById('search-container');
    //Get search
    const search = document.getElementById('search');

    //Insert message
    searchContainer.insertBefore(div, search);

    //Timeout alert message in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

//Truncate text
function truncateString(myString, limit) {
    //Make sure we are at the end of a word before things get cut off
    const shortened = myString.indexOf(' ', limit);
    if (shortened == -1) return myString;
    return myString.substring(0, shortened);
}