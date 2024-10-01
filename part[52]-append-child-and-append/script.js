const h1 = document.querySelector('h1'); // Select the first <h1> element in the document
const container = document.querySelector('.container'); // Select the element with the class "container"
const card = document.querySelector('.card'); // Select the element with the class "card"

// Append the h1 element to the container
container.appendChild(h1);

// Clone the h1 element and append the cloned version to the container
container.appendChild(h1.cloneNode(true)); // cloneNode(true) clones both the element and its content

// Loop to create 100 clones of the card
for (let i = 0; i <= 100; i++) {
    const newCard = card.cloneNode(true); // cloneNode(true) clones the card element and its child nodes (content)
    
    newCard.innerText = i; // Set the text of the cloned card to the current index value (i)
    
    container.append(newCard); // Append the newCard to the container
}
