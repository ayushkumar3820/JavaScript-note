const h1 = document.querySelector('h1');
// Selects the first <h1> element from the DOM and stores it in the variable 'h1'.

const p = document.querySelector('p');
// Selects the first <p> element from the DOM and stores it in the variable 'p'.

const button = document.querySelectorAll('button');
// Selects all <button> elements from the DOM and stores them in the 'button' variable as a NodeList.

const img = document.querySelector('img');
// Selects the first <img> element from the DOM and stores it in the variable 'img'.

button.addEventListener('click', () => { 
// Adds a 'click' event listener to the button (incorrect, as 'button' is a NodeList, not a single button. It should use a loop or select a specific button).

    const xhr = new XMLHttpRequest(); 
    // Creates a new XMLHttpRequest object to handle the network request.

    xhr.response = 'json'; 
    // Incorrect usage. It should be 'xhr.responseType = "json";' to properly set the response type to JSON.

    xhr.addEventListener('load', () => { 
    // Adds a 'load' event listener that triggers when the request completes successfully.

        img.src = JSON.parse(xhr.response).message; 
        // Sets the 'src' attribute of the 'img' element to the 'message' property from the parsed JSON response.

        console.log(xhr); 
        // Logs the 'xhr' object to the console for debugging.
    });

    xhr.open('GET', "https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=5000"); 
    // Opens a GET request to the given URL, which includes a sleep of 5000 ms (5 seconds).

    xhr.send(); 
    // Sends the network request.
});

setTimeout(() => { 
// Sets a timer that will execute the provided function after 4000 ms (4 seconds).

    console.log('hiiiiii'); 
    // Logs 'hiiiiii' to the console after 4 seconds.
}, 4000);


// The following block of code is commented out:

// const blockingBtn = document.querySelector('.blocking-btn')
// This selects a button with class 'blocking-btn'.

// blockingBtn.addEventListener('click', () => {
// Adds a 'click' event listener to 'blockingBtn' that triggers when clicked.

//   const startTime = Date.now()
//   let currentTime = startTime
// These variables store the current time and loop continuously for 4000 ms.

//   while (startTime + 4000 > currentTime) {
//     currentTime = Date.now()
// This while loop continuously updates 'currentTime' until 4000 ms have passed, blocking the main thread for that duration.

//   }
// })

