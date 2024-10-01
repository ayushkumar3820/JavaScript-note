// Selecting the <h1> element using querySelector
const h1Element = document.querySelector('h1');
console.log('Selected h1 Element:', h1Element);

// Changing the text content of the <h1> element
h1Element.textContent = 'DOM: Element vs Node';

// Creating a new paragraph element and appending it to the body
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a new paragraph created using JavaScript.';
document.body.appendChild(paragraph);

// Working with nodes - selecting and modifying text nodes
const bodyNode = document.body;

// Text nodes include both text and comments within the body
console.log('Body child nodes:', bodyNode.childNodes); // Logs all child nodes, including text nodes and comment nodes

// Changing the "Hello World" text by modifying the text node directly
bodyNode.childNodes[2].nodeValue = 'Modified Hello World';

// Demonstrating comment nodes
console.log('Comment Node:', bodyNode.childNodes[3]); // Logs the comment node

// Adding a new comment node dynamically
const newComment = document.createComment('This is a new comment added via JavaScript');
document.body.appendChild(newComment);

// Logging the final structure of the body to show all nodes
console.log('Updated Body child nodes:', bodyNode.childNodes);
