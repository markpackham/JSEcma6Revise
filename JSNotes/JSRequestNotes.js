//XHR GET Requests
/*
Asynchronous JavaScript and XML (AJAX), 
enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, 
now it can be used to make requests that have many different formats.
*/

//Example of a Request
const jsonButton = document.querySelector("#generate");
const buttonContainer = document.querySelector("#buttonContainer");
const display = document.querySelector("#displayContainer");
const collection = [
  "Another",
  "More",
  "Next",
  "Continue",
  "Keep going",
  "Click me",
  "A new one"
];

const generateJson = () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
      changeButton();
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
};

const formatJson = resJson => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson
    .split("")
    .map(char => {
      switch (char) {
        case ",":
          return `,\n${" ".repeat(counter * 2)}`;
        case "{":
          counter += 1;
          return `{\n${" ".repeat(counter * 2)}`;
        case "}":
          counter -= 1;
          return `\n${" ".repeat(counter * 2)}}`;
        default:
          return char;
      }
    })
    .join("");
};

const renderResponse = jsonResponse => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

jsonButton.addEventListener("click", generateJson);

//GET Request structure
const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";
xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};
xhr.open("GET", url);
xhr.send();

//GET Datamuse API request example
// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_rhy=";
// Selecting page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");
// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };

  xhr.open("GET", endpoint);
  xhr.send();
};
// Clear previous results and display results to webpage
const displaySuggestions = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};
submit.addEventListener("click", displaySuggestions);

//Query String
//query string is separated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =
//if you want to add an additional parameter you will have to use the & character to separate your parameters
//'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'
// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_jjb=";
const additionalParams = "&topics=";
// Selecting page elements
const inputField = document.querySelector("#input");
const topicField = document.querySelector("#topic");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");
// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };

  xhr.open("GET", endpoint);
  xhr.send();
};
// Clear previous results and display results to webpage
const displaySuggestions = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};
submit.addEventListener("click", displaySuggestions);

//POST Request layout
const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";
const data = JSON.stringify({ id: "200" });
xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};
xhr.open("POST", url);
xhr.send(data);

//POST request example
/*
The major difference between a GET request and POST request is that a 
POST request requires additional information to be sent through the request. 
This additional information is sent in the body of the post request.
*/
// Information to reach API
const apiKey = "<Your API Key>";
const url = "https://api.rebrandly.com/v1/links";
// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");
// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("apikey", apiKey);
  xhr.send(data);
};
// Clear page and call AJAX functions
const displayShortUrl = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};
shortenButton.addEventListener("click", displayShortUrl);

/*
JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, 
is a set of tools that are used together to take advantage of JavaScript’s asynchronous capabilities.

There are many HTTP request methods, two of which are GET and POST.

GET requests only request information from other sources.

POST methods can introduce new information to other sources in addition to requesting it.

GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, 
creating a function that will handle the response object, and opening and sending the request.

To add a query string to a URL endpoint you can use ? and include a parameter.

To provide additional parameters, use & and then include a key-value pair, joined by =.

Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you’re working.
*/

//Promises
//promise is an object that handles asynchronous data. A promise has three states:
/*
pending : when a promise is created or waiting for data.
fulfilled : the asynchronous operation was handled successfully.
rejected : the asynchronous operation was unsuccessful.
The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method to the original promise.
*/

//fetch() aysnc await example
const jsonButton = document.querySelector("#generate");
const buttonContainer = document.querySelector("#buttonContainer");
const display = document.querySelector("#displayContainer");
const collection = [
  "Another",
  "More",
  "Next",
  "Continue",
  "Keep going",
  "Click me",
  "A new one"
];
const generateJson = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch (error) {
    console.log(error);
  }
};
const formatJson = resJson => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson
    .split("")
    .map(char => {
      switch (char) {
        case ",":
          return `,\n${" ".repeat(counter * 2)}`;
        case "{":
          counter += 1;
          return `{\n${" ".repeat(counter * 2)}`;
        case "}":
          counter -= 1;
          return `\n${" ".repeat(counter * 2)}}`;
        default:
          return char;
      }
    })
    .join("");
};
const renderResponse = jsonResponse => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};
const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};
jsonButton.addEventListener("click", generateJson);

//fetch()
/*
fetch() function:
Creates a request object that contains relevant information that an API needs.
Sends that request object to the API endpoint provided.
Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.
*/
//Fetch Layout example
fetch("https://api-to-call.com/endpoint")
  .then(
    response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    networkError => {
      console.log(networkError.message);
    }
  )
  .then(jsonResponse => {
    return jsonResponse;
  });
