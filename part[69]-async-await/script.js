async function makeAsyncRequest() { 
    // Defines an asynchronous function named makeAsyncRequest
    const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'; 
    // Sets the URL for the API request
    const response = await fetch(url); 
    // Makes an HTTP GET request to the specified URL and waits for the response
    const data = await response.json(); 
    // Parses the JSON response and waits for it to complete
    return data; 
    // Returns the parsed data
  }
  
  makeAsyncRequest().then((data) => {
    // Calls the async function and handles the resolved data with .then
    console.log(data); 
    // Logs the result (resolved data) to the console
  });
  