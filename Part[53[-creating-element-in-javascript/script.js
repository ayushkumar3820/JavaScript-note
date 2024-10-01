const h1 = document.querySelector('h1'); // Selects the first <h1> element from the document and stores it in the h1 variable.
const container = document.querySelector('.container'); // Selects the element with the class "container" from the document and stores it in the container variable.
const firstImg = document.querySelector('img'); // Selects the first <img> element from the document and stores it in the firstImg variable (currently not used in the rest of the code).

const paragraph = document.createElement('p'); // Creates a new <p> element (a paragraph) and stores it in the paragraph variable.
paragraph.innerHTML = "hello"; // Sets the inner HTML (text content) of the paragraph to "hello".
paragraph.classList.add('img-part'); // Adds the CSS class 'img-part' to the paragraph element for styling purposes.

// Append the paragraph to the container element
container.append(paragraph); // Appends the paragraph to the container, making it visible in the DOM.

// Append the h1 and its clone to the container
container.appendChild(h1); // Appends the h1 element (selected earlier) to the container.
container.appendChild(h1.cloneNode(true)); // Clones the h1 element (including its content) and appends the clone to the container, so now there are two <h1> elements.

// Loop to create and append 100 Pokémon images
for (let i = 1; i <= 100; i++) {  // The loop starts from 1 and runs until 100.
    const newImg = document.createElement('img'); // Creates a new <img> element in each iteration.
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`; // Sets the src attribute to a Pokémon image URL. The ${i} inserts the current loop number into the URL.
    container.append(newImg); // Appends each new image to the container, making the Pokémon image visible on the webpage.
}

// Create and append one more Pokémon image (the 100th Pokémon)
const newImage = document.createElement('img'); // Creates another new <img> element.
newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png`; // Sets the src to display the 100th Pokémon image.
container.append(newImage); // Appends this image to the container, adding it to the webpage after the loop.
