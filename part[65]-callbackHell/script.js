function makeHttpRequest(method, url, callback) { 
    // A function named `makeHttpRequest` that accepts three parameters:
    // 'method' (HTTP method like 'GET', 'POST'), 'url' (the API endpoint), and 'callback' (a function that gets called when the request completes).
    
        const xhr = new XMLHttpRequest(); 
        // Creates a new XMLHttpRequest object for making HTTP requests.
    
        xhr.responseType = 'json'; 
        // Incorrect: should be `xhr.responseType = 'json'`. It sets the response type of the request, but it does not work as intended here.
    
        xhr.addEventListener('load', () => { 
        // Adds a 'load' event listener that triggers when the HTTP request is successfully completed.
    
            callback(xhr.response); 
            // Calls the 'callback' function, passing the response (xhr.response) as its argument.
        });
    
        xhr.open(method, url); 
        // Initializes the request with the given method ('GET' in this case) and the provided URL.
    
        xhr.send(); 
        // Sends the HTTP request to the server.
    }
    
    makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => { 
    // Makes the first HTTP GET request to fetch users. When completed, the response (usersData) is passed to the callback function.
    
        makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => { 
        // Makes the second GET request to fetch posts by the first user from the 'usersData' response.
    
          makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => { 
          // Makes the third GET request to fetch comments for the first post from the 'postsData' response.
    
            makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => { 
            // Makes the fourth GET request to fetch the user who commented on the post.
    
              console.log(userData); 
              // Logs the final user data fetched after chaining the requests.
            });
          });
        });
    });
    