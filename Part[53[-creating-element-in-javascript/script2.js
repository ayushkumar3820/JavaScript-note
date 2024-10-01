const container = document.querySelector('.container');

for (let i = 0; i <= 100; i++) {
    debugger; // Used for debugging, it will pause code execution in the browser console
    const imgContainer = document.createElement('div'); // Creates a new <div> element for each image
    imgContainer.classList.add('img-Container'); // Adds the class 'img-Container' to the div

    const newImg = document.createElement('img'); // Creates a new <img> element for the Pokémon sprite
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`; // Sets the source of the image dynamically based on the loop index (i)

    const paragraph = document.createElement('p'); // Creates a new <p> element for the Pokémon number
    paragraph.innerHTML = i; // Sets the paragraph content to the current loop index (i), which represents the Pokémon number

    // Appends the new image and the paragraph to the imgContainer <div>
    imgContainer.append(newImg, paragraph);

    // Appends the imgContainer (with the image and paragraph) to the main container
    container.append(imgContainer);
}
