const img = document.querySelector('img'); 
// Selects the first <img> element in the DOM and stores it in the 'img' variable.

const button = document.querySelector('button'); 
// Selects the first <button> element in the DOM and stores it in the 'button' variable.

button.addEventListener('click', () => { 
// Adds a 'click' event listener to the button. When clicked, the function will execute.

  const xhr = new XMLHttpRequest(); 
  // Creates a new XMLHttpRequest object to handle a network request.

  xhr.responseType = 'json'; 
  // Sets the response type of the request to 'json', meaning the server response will be parsed as a JSON object.

  xhr.addEventListener('load', () => { 
  // Adds a 'load' event listener to the xhr object. It triggers when the request completes successfully.

    img.src = xhr.response.message; 
    // Sets the source of the 'img' element to the 'message' property of the JSON response, likely containing a URL of the image.

    console.log(xhr); 
    // Logs the 'xhr' object to the console for debugging.
  });

  xhr.open('GET', 'https://example.com/api'); 
  // Opens a GET request to the specified API endpoint.

  xhr.send(); 
  // Sends the actual request to the server.

});

xhr.onload = () => { 
// Defines another 'onload' event handler (though unnecessary since it's already set inside the click event).
  img.src = xhr.response.message; 
  // Again, sets the image source from the response.
  
  console.log(xhr); 
  // Logs the XMLHttpRequest object.
};
