// fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   })
// Debugger statement helps pause execution for debugging purposes
debugger;

// Fetch makes an HTTP request to the URL 'https://dummyjson.com/products/add' with the options object.
fetch('https://dummyjson.com/products/add', {

  // Specifies that this is a POST request (used to send data to the server).
  method: 'POST',

  // The headers define the content type as JSON, telling the server what kind of data is being sent.
  headers: { 'Content-Type': 'application/json' },

  // The body contains the actual data, converted to a JSON string using `JSON.stringify()`.
  body: JSON.stringify({
    title: 'BMW Pencil', // Sending the title of the product.
    category: 'Stationary' // Sending the category of the product.
    /* other product data */ // Placeholder for other potential product data.
  })

  // Once the request completes, `.then()` processes the response and converts it from JSON.
}).then(res => res.json())

  // Logs the parsed JSON response from the server to the console.
  .then(console.log)

  // If any errors occur (e.g., network failure), `.catch()` logs them to the console.
  .catch((err) => {
    console.log(err);
  });
  