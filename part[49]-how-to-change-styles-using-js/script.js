const h1 = document.querySelector('h1');
const paragraph = document.querySelector('p');
const allLinks = document.querySelectorAll('a');

// Commented out the logging of paragraph innerHTML and changing its content
// console.log(paragraph.innerHTML);
// paragraph.innerHTML = '<h4>Hiii</h4>';

// Styling the <h1> element
h1.style.color = 'hotpink';
h1.style.backgroundColor = 'skyblue';

// Looping through all links (<a> elements) and modifying their styles
for (const link of allLinks) {
    // Option to directly change styles using properties
    // link.style.color = 'teal';
    // link.style.textDecorationLine = 'none';
    // link.style.fontWeight = '700';
    // link.style.fontFamily = 'cursive';
    // link.style.fontSize = '18px';

    // Option to set multiple styles using cssText
    // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `;

    // Adding or removing classes from the <a> elements
    link.classList.add('green-link'); // Add 'green-link' class
    link.classList.remove('my-link'); // Remove 'my-link' class (if exists)

    // Alternatively, toggle the class on or off
    // link.classList.toggle('my-link');
}
