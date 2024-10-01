function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest(); // Step 1: Create a new XMLHttpRequest object for making HTTP requests
    xhr.responseType = 'json'; // Step 2: Set the expected response type to JSON
  
    const promise = new Promise((resolve, reject) => { // Step 3: Create a new Promise to handle asynchronous operations
      xhr.addEventListener('load', () => { // Step 4: Add a listener for the load event (successful response)
        resolve(xhr.response); // Step 5: Resolve the promise with the response data when the request loads successfully
      });
      xhr.addEventListener('error', () => { // Step 6: Add a listener for the error event (failed request)
        reject('request failed'); // Step 7: Reject the promise with an error message if the request fails
      });
    });
  
    xhr.open(method, url); // Step 8: Initialize the request with the specified HTTP method and URL
    xhr.send(); // Step 9: Send the request to the server
  
    return promise; // Step 10: Return the promise to the caller for handling the asynchronous operation
  }
  

// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   makeHttpRequest('GET', https://dummyjson.com/posts/user/${usersData.users[0].id}, (postsData) => {
//     makeHttpRequest('GET', https://dummyjson.com/comments/post/${postsData.posts[0].id}, (commentsData) => {
//       makeHttpRequest('GET', https://dummyjson.com/users/${commentsData.comments[0].user.id}, (userData) => {
//         console.log(userData);
//       });
//     });
//   });
// })
  
  // Step 11: Make an initial HTTP GET request to fetch user data
  makeHttpRequest('GET', 'https://dummyjson.com/users')
    .then((usersData) => // Step 12: Handle the resolved promise with the user data
      makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`) // Step 13: Fetch posts for the first user
    )
    .then((postsData) => // Step 14: Handle the resolved promise with the posts data
      makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`) // Step 15: Fetch comments for the first post
    )
    .then((commentsData) => // Step 16: Handle the resolved promise with the comments data
      makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`) // Step 17: Fetch user data for the author of the first comment
    )
    .then((userData) => console.log(userData)) // Step 18: Log the final user data to the console
    .catch((err) => console.log(err)); // Step 19: Catch and log any errors that occur during the requests
  