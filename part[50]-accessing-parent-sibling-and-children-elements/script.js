// Selecting the <h1> element
const h1 = document.querySelector('h1');

// Selecting the first <p> element (if any)
const paragraph = document.querySelector('p');

// Selecting all <a> elements (links) in the document
const allLinks = document.querySelectorAll('a'); // Use querySelectorAll to get all links

// Log the inner HTML of the paragraph
if (paragraph) { // Check if the paragraph exists
    console.log(paragraph.innerHTML);
    // Change the paragraph's inner HTML to a new <h4> element
    paragraph.innerHTML = '<h4>hiii</h4>';
}

// Change the style of the <h1> element
h1.style.color = 'hotpink'; // Set the text color of <h1>
h1.style.backgroundColor = 'red'; // Set the background color of <h1>

// Loop through all <a> elements to change their color
for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.color = 'yellow'; // Set the text color of each link to yellow
}
