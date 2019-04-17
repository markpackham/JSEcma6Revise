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
